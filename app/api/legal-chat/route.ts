import {
  convertToModelMessages,
  streamText,
  UIMessage,
} from "ai"
import { createOpenAICompatible } from "@ai-sdk/openai-compatible"
import { buildSystemPrompt } from "@/lib/legal-knowledge-base"

const openai = createOpenAICompatible({
  name: "openai",
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
})

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
