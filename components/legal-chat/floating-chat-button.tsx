"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingChatButton() {
  const pathname = usePathname()

  // Don't show on the legal assistant page itself
  if (pathname === "/legal-assistant") return null

  return (
    <Link
      href="/legal-assistant"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Open AI Legal Assistant"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" style={{ animationDuration: "3s" }} />

        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all flex items-center justify-center cursor-pointer">
          <svg
            className="w-6 h-6 text-accent-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            AI Legal Assistant
            <div className="absolute top-full right-4 w-2 h-2 bg-foreground rotate-45 -mt-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
