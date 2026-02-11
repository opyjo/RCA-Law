"use client"

import { cn } from "@/lib/utils"
import type { UIMessage } from "ai"

function getUIMessageText(msg: UIMessage): string {
  if (!msg.parts || !Array.isArray(msg.parts)) return ""
  return msg.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

// Simple markdown-like rendering for legal citations and formatting
function renderLegalContent(text: string) {
  // Split into sections for references
  const lines = text.split("\n")
  const elements: React.ReactNode[] = []

  lines.forEach((line, i) => {
    const trimmed = line.trim()

    // Bold headers (## or **)
    if (trimmed.startsWith("## ") || trimmed.startsWith("### ")) {
      const headerText = trimmed.replace(/^#{2,3}\s/, "")
      elements.push(
        <h3 key={i} className="font-serif font-bold text-foreground mt-4 mb-2 text-base">
          {headerText}
        </h3>
      )
      return
    }

    // Bold text with **
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-foreground mt-3 mb-1">
          {trimmed.slice(2, -2)}
        </p>
      )
      return
    }

    // Citation lines (contain typical legal citation patterns)
    const citationPattern = /(\[?\d{4}\]?\s+(?:SCC|SCR|ONCA|ONSC|CanLII|FCA|FCR)\s+\d+)/
    if (citationPattern.test(trimmed)) {
      elements.push(
        <p key={i} className="text-sm bg-muted px-3 py-1.5 rounded-sm border-l-2 border-accent my-1 font-mono">
          {renderInlineFormatting(trimmed)}
        </p>
      )
      return
    }

    // Bullet points
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      elements.push(
        <li key={i} className="ml-4 text-sm leading-relaxed list-disc">
          {renderInlineFormatting(trimmed.slice(2))}
        </li>
      )
      return
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      elements.push(
        <li key={i} className="ml-4 text-sm leading-relaxed list-decimal">
          {renderInlineFormatting(trimmed.replace(/^\d+\.\s/, ""))}
        </li>
      )
      return
    }

    // Empty lines
    if (trimmed === "") {
      elements.push(<div key={i} className="h-2" />)
      return
    }

    // Regular paragraphs
    elements.push(
      <p key={i} className="text-sm leading-relaxed">
        {renderInlineFormatting(trimmed)}
      </p>
    )
  })

  return elements
}

// Render bold and italic inline formatting
function renderInlineFormatting(text: string): React.ReactNode {
  // Handle **bold** text
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    // Handle *italic* text
    const italicParts = part.split(/(\*[^*]+\*)/)
    return italicParts.map((ip, j) => {
      if (ip.startsWith("*") && ip.endsWith("*") && !ip.startsWith("**")) {
        return (
          <em key={`${i}-${j}`} className="italic">
            {ip.slice(1, -1)}
          </em>
        )
      }
      return <span key={`${i}-${j}`}>{ip}</span>
    })
  })
}

interface ChatMessageProps {
  message: UIMessage
  isStreaming?: boolean
}

export function ChatMessage({ message, isStreaming }: ChatMessageProps) {
  const text = getUIMessageText(message)
  const isUser = message.role === "user"

  return (
    <div
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] md:max-w-[75%] rounded-lg px-4 py-3",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-card border border-border"
        )}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <svg
                className="w-3.5 h-3.5 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              RCA Law AI Assistant
            </span>
          </div>
        )}

        <div
          className={cn(
            isUser ? "text-sm leading-relaxed" : "text-foreground space-y-0.5"
          )}
        >
          {isUser ? (
            <p>{text}</p>
          ) : (
            renderLegalContent(text)
          )}
        </div>

        {isStreaming && !isUser && (
          <div className="flex items-center gap-1 mt-2 pt-2 border-t border-border">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: "150ms" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: "300ms" }} />
            <span className="text-xs text-muted-foreground ml-1">Researching...</span>
          </div>
        )}
      </div>
    </div>
  )
}
