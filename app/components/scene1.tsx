'use client'

import { useEffect, useState } from 'react'

const arr = ['breathe in', 'breathe out']

export function Scene1({ next }: { next: () => void }) {
  const [start, setStart] = useState(false)
  const [count, setCount] = useState(80)
  const [status, setStatus] = useState(0)

  useEffect(() => {
    if (!start) return

    if (count > 0) {
      const intervalId = setInterval(() => {
        if (count % 4 === 1) {
          setStatus(status == 0 ? 1 : 0)
          //   if (audioRef.current) {
          //     audioRef.current.play();
          //   }
        }
        setCount(count - 1)
      }, 1000)

      return () => clearInterval(intervalId)
    } else {
      next()
    }
  }, [count, start])

  return start ? (
    <>
      <div>{arr[status]}</div>
      <div>{count}</div>
    </>
  ) : (
    <>
      <div>深呼吸をしましょう</div>
      <button onClick={() => setStart(true)}>next</button>
    </>
  )
}
