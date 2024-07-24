'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const arr = ['breathe in', 'breathe out']

export function Scene1({ next }: { next: () => void }) {
  const [start, setStart] = useState(false)
  const [count, setCount] = useState(8)
  const [status, setStatus] = useState(0)

  useEffect(() => {
    if (!start) return

    if (count > 0) {
      const intervalId = setInterval(() => {
        if (count % 4 === 1) {
          setStatus(status == 0 ? 1 : 0)
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
      <div></div>
      <div>{arr[status]}</div>
      <div className="w-full text-right">{count}</div>
    </>
  ) : (
    <>
      <div></div>
      <div className="text-muted-foreground">深呼吸をしましょう</div>
      <Button onClick={() => setStart(true)}>next</Button>
    </>
  )
}
