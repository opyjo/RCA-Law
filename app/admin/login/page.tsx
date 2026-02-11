"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        // Use full page navigation to ensure the session cookie is sent with the request
        window.location.href = "/legal-assistant"
        return
      } else {
        const data = await res.json()
        setError(data.error || "Invalid password")
      }
    } catch {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="RCA Law"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-serif font-bold text-foreground">Admin Access</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Enter your password to access the Legal Assistant
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              autoFocus
              className="h-11"
            />
          </div>

          {error && (
            <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading || !password}
            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        {/* Back link */}
        <div className="text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Back to RCA Law
          </Link>
        </div>

        {/* Security notice */}
        <div className="flex items-start gap-2 rounded-md bg-muted/50 p-3">
          <svg className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This area is restricted to authorized administrators. All access is logged and sessions expire after 24 hours.
          </p>
        </div>
      </div>
    </main>
  )
}
