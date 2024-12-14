import React from 'react'

const emojis = ['🍎', '🍕', '🥗', '🍗', '🥑', '🍅', '🥕', '🍇', '🍳', '🥩', '🍠', '🥦']

export default function StaticEmojiBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  )
}

