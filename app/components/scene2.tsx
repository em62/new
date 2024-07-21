import { useEffect, useState } from 'react'

export function Scene2({ next }: { next: () => void }) {
  const [count, setCount] = useState(60)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!start) return

    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount(count - 1)
      }, 1000)

      return () => clearInterval(intervalId)
    } else {
      next()
    }
  }, [count, start])

  return start ? (
    <>
      <div>{count}</div>
      <span className="relative flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#adfa1d] opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#adfa1d]"></span>
      </span>
      <div></div>
    </>
  ) : (
    <>
      <div>1点を見つめましょう</div>
      <button onClick={() => setStart(true)}>next</button>
    </>
  )
}
