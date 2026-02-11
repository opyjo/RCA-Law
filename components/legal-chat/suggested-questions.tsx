"use client"

import { useState } from "react"
import { SUGGESTED_QUESTIONS } from "@/lib/legal-knowledge-base"

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void
  disabled: boolean
}

const AREA_ICONS: Record<string, React.ReactNode> = {
  "Estate Planning": (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  "Immigration": (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  "Family Law": (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  "Tax Law": (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
}

export function SuggestedQuestions({ onSelect, disabled }: SuggestedQuestionsProps) {
  const [activeArea, setActiveArea] = useState<string>("Estate Planning")
  const areas = Object.keys(SUGGESTED_QUESTIONS) as Array<keyof typeof SUGGESTED_QUESTIONS>

  return (
    <div className="space-y-4">
      <div className="text-center space-y-1">
        <h3 className="font-serif font-bold text-foreground text-lg">
          Ontario Legal Assistant
        </h3>
        <p className="text-sm text-muted-foreground">
          Ask about estate planning, immigration, family law, or tax law in Ontario
        </p>
      </div>

      {/* Area Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setActiveArea(area)}
            disabled={disabled}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeArea === area
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {AREA_ICONS[area]}
            {area}
          </button>
        ))}
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {SUGGESTED_QUESTIONS[activeArea as keyof typeof SUGGESTED_QUESTIONS].map((question, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(question)}
            disabled={disabled}
            className="text-left p-3 rounded-lg border border-border bg-card hover:border-accent/50 hover:bg-muted/50 transition-all text-sm text-foreground cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <span className="text-accent mr-1.5 group-hover:text-accent/80 transition-colors">
              {"-->"}
            </span>
            {question}
          </button>
        ))}
      </div>
    </div>
  )
}
