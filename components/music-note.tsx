import type React from "react"
;('"use client')

interface MusicNoteProps {
  left: string
  startDelay: number
  color: string
  size: number
}

export function MusicNote({ left, startDelay, color, size }: MusicNoteProps) {
  const style = {
    left: left,
    animationDelay: `${startDelay}s`,
    "--note-color": color,
    width: `${size}px`,
    height: `${size}px`,
  } as React.CSSProperties

  return (
    <div className="music-note" style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--note-color)" }}
      >
        <path d="M9 5a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4H15a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H9z"></path>
        <path d="M9 9v7"></path>
      </svg>
    </div>
  )
}
