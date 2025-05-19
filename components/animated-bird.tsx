"use client"

import { useEffect, useRef } from "react"

interface AnimatedBirdProps {
  className?: string
  pathClass: string
  size?: number
  delay?: number
  primaryColor?: string
  secondaryColor?: string
}

export function AnimatedBird({
  className = "",
  pathClass,
  size = 60,
  delay = 0,
  primaryColor = "#7c3aed",
  secondaryColor = "#c026d3",
}: AnimatedBirdProps) {
  const birdRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bird = birdRef.current
    if (!bird) return

    bird.style.animationDelay = `${delay}s`
  }, [delay])

  return (
    <div ref={birdRef} className={`bird ${pathClass} ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left wing - positioned behind body with lower z-index */}
        <path
          className="bird-wing-behind"
          d="M50,45 C45,40 35,42 30,50 C25,58 30,62 40,58 C45,56 48,50 50,45Z"
          fill={secondaryColor}
          opacity="0.7"
        />

        {/* Bird body */}
        <path
          d="M40,50 C45,60 55,65 65,60 C75,55 85,45 75,35 C65,25 55,30 50,35 C45,40 35,40 40,50Z"
          fill={primaryColor}
        />

        {/* Bird head */}
        <path d="M65,33 C70,28 80,30 83,35 C86,40 83,50 78,45 C73,40 70,38 65,33Z" fill={primaryColor} />

        {/* Bird eye */}
        <circle cx="78" cy="35" r="2" fill="white" />
        <circle cx="78" cy="35" r="1" fill="black" />

        {/* Bird beak */}
        <path d="M83,35 L95,32 L83,38Z" fill={secondaryColor} />

        {/* Right wing - on top */}
        <path
          className="bird-wing-alt"
          d="M60,45 C65,40 70,42 72,50 C74,58 70,62 65,58 C60,56 58,50 60,45Z"
          fill={secondaryColor}
          opacity="0.9"
        />

        {/* Tail feathers */}
        <path className="bird-tail" d="M40,50 L25,45 L20,55 L30,50Z" fill={secondaryColor} />
      </svg>
    </div>
  )
}
