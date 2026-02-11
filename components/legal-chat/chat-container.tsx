"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { SuggestedQuestions } from "./suggested-questions"
import { LegalDisclaimer, InlineDisclaimer } from "./legal-disclaimer"

export function ChatContainer() {
  const [hasStarted, setHasStarted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/legal-chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = (text: string) => {
    if (!hasStarted) setHasStarted(true)
    sendMessage({ text })
  }

  return (
    <div className="flex flex-col h-full">
      {/* Disclaimer at top */}
      <div className="px-4 pt-4 pb-2 flex-shrink-0">
        <LegalDisclaimer />
      </div>

      {/* Messages area */}
      <div
        ref={scrollAreaRef}
        className="flex-1 overflow-y-auto px-4 py-4"
      >
        {!hasStarted && messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="max-w-lg w-full">
              <SuggestedQuestions
                onSelect={handleSend}
                disabled={isLoading}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                isStreaming={
                  isLoading &&
                  message === messages[messages.length - 1] &&
                  message.role === "assistant"
                }
              />
            ))}

            {/* Loading indicator when waiting for response */}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border rounded-lg px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <div
                          className="w-2 h-2 rounded-full bg-accent animate-pulse"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-accent animate-pulse"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Researching Ontario law...
                      </span>
                    </div>
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="flex-shrink-0 border-t border-border bg-background px-4 py-3 space-y-2">
        <ChatInput onSend={handleSend} isLoading={isLoading} />
        <InlineDisclaimer />
      </div>
    </div>
  )
}
