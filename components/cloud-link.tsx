"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import type { ReactNode } from "react"

interface CloudLinkProps {
  href: string
  children: ReactNode
}

export function CloudLink({ href, children }: CloudLinkProps) {
  const cloudRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cloud = cloudRef.current
    if (!cloud) return

    // Add random slight rotation to each cloud
    const rotation = Math.random() * 4 - 2 // Between -2 and 2 degrees
    cloud.style.transform = `rotate(${rotation}deg)`

    // Add random animation delay to each cloud
    const delay = Math.random() * 5 // Between 0 and 5 seconds
    cloud.style.animationDelay = `${delay}s`
  }, [])

  return (
    <Link href={href} className="cloud-link inline-block px-3 py-1">
      <div ref={cloudRef} className="relative w-32 h-20 flex items-center justify-center">
        {/* Simplified cloud shape - pure white */}
        <svg
          className="cloud-base absolute inset-0 w-full h-full"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40,80 C20,80 10,65 10,50 C10,35 25,25 40,25 C40,10 55,0 75,0 C100,0 110,15 115,25 C125,15 140,15 150,25 C165,25 180,35 180,50 C180,65 170,80 150,80 Z"
            fill="white"
            stroke="white"
            strokeWidth="1"
          />
        </svg>

        {/* Text on the cloud */}
        <span className="cloud-text text-violet-700 font-bold text-lg relative z-10">{children}</span>
      </div>
    </Link>
  )
}
