"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimationType = 
  | "fade-in" 
  | "fade-in-up" 
  | "fade-in-down" 
  | "slide-in-left" 
  | "slide-in-right" 
  | "scale-in"

type AnimatedSectionProps = {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
  once?: boolean
}

export const AnimatedSection = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, once])

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0"

  return (
    <div
      ref={ref}
      className={cn(animationClass, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

type StaggerContainerProps = {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 100,
}: StaggerContainerProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ["--stagger-delay" as string]: `${staggerDelay}ms`,
      }}
    >
      {isVisible ? children : <div className="opacity-0">{children}</div>}
    </div>
  )
}

