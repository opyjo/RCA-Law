import {
  convertToModelMessages,
  streamText,
  UIMessage,
} from "ai"
import { openai } from "@ai-sdk/openai"
import { buildSystemPrompt } from "@/lib/legal-knowledge-base"

export const maxDuration = 60

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const systemPrompt = buildSystemPrompt()

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
    maxOutputTokens: 2048,
    temperature: 0.3,
  })

  return result.toUIMessageStreamResponse()
}
