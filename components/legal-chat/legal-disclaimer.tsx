"use client"

import { useState } from "react"

export function LegalDisclaimer() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-muted/50 border border-border rounded-lg p-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-accent flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <span className="text-xs font-semibold text-foreground">
            Important Legal Notice
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-border space-y-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This AI Legal Assistant is provided by RCA Law for informational purposes only.
            Responses do not constitute legal advice and should not be relied upon as such.
            The information provided is general in nature and may not apply to your specific situation.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            For legal advice specific to your situation, please consult with a qualified
            legal professional. RCA Law offers free consultations -- call
            <a href="tel:905-517-3093" className="text-accent font-semibold hover:underline mx-1">905-517-3093</a>
            or email
            <a href="mailto:Info@rcalaw.ca" className="text-accent font-semibold hover:underline mx-1">Info@rcalaw.ca</a>.
          </p>
          <div className="flex items-start gap-2 bg-background rounded p-2">
            <svg
              className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Privacy:</strong> Do not share sensitive personal information
              such as social insurance numbers, financial details, or case-specific facts.
              Conversations are not stored or shared with third parties.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export function InlineDisclaimer() {
  return (
    <p className="text-[11px] text-muted-foreground text-center leading-relaxed px-4">
      AI responses are for informational purposes only and do not constitute legal advice.
      Always consult a qualified lawyer for your specific situation.
    </p>
  )
}
