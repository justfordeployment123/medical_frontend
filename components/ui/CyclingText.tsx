'use client'

import { useState, useEffect } from 'react'

const words = ['Healthcare', 'Legal', 'Real Estate', 'Recruitment', 'E-commerce', 'Finance']

export default function CyclingText() {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length)
        setShow(true)
      }, 280)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      style={{
        display: 'inline-block',
        color: '#7dd3fc',
        fontWeight: 700,
        transition: 'opacity 0.28s ease, transform 0.28s ease',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(-6px)',
        minWidth: 180,
        textAlign: 'left',
      }}
    >
      {words[index]}
    </span>
  )
}
