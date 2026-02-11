import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChatContainer } from "@/components/legal-chat/chat-container"
import { AdminLogoutButton } from "@/components/legal-chat/admin-logout-button"

export const metadata: Metadata = {
  title: "AI Legal Assistant - RCA Law | Ontario Legal Information",
  description:
    "Get instant answers about Ontario estate planning, wills, immigration, tax, and family law. Powered by AI with citations to Ontario case law and legislation.",
}

export default function LegalAssistantPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-primary text-primary-foreground py-8 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 hero-pattern hero-grid" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-white text-balance">
                AI Legal Assistant
              </h1>
              <p className="text-sm text-white/80 mt-1">
                Expert information on Ontario estate, immigration, family, and tax law
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-white/90 font-medium">Online</span>
              </div>
              <AdminLogoutButton />
              <div className="hidden md:flex items-center gap-2 text-xs text-white/70">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Jurisdiction: Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Chips */}
      <section className="border-b border-border bg-muted/30 py-3 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span>Case Law Citations</span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              <span>Ontario Legislation</span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span>Privacy Protected</span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
              <span>AI-Powered Research</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Area - fills remaining space */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full min-h-0" style={{ height: "calc(100vh - 260px)" }}>
        <ChatContainer />
      </div>

      <Footer />
    </main>
  )
}
