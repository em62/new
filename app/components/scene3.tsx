import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const initialCount = 0

export function Scene3({ next }: { next: () => void }) {
  const [start, setStart] = useState(false)
  const [run, setRun] = useState(false)
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    if (run && count > 0) {
      const intervalId = setInterval(() => {
        setCount(count - 1)
      }, 1000)

      return () => clearInterval(intervalId)
    }

    if (count == 0) {
      next()
    }
  }, [count, run])

  return start ? (
    <>
      <div></div>
      <div className="text-4xl font-semibold">
        {Math.floor(count / 60)
          .toString()
          .padStart(2, '0')}
        :{(count % 60).toString().padStart(2, '0')}
      </div>
      <div>
        {!run && <button onClick={() => setRun(true)}>restart</button>}
        {!run && count < initialCount && <button onClick={() => setCount(initialCount)}>reset</button>}
        {run && <button onClick={() => setRun(false)}>stop</button>}
      </div>
    </>
  ) : (
    <>
      <div></div>
      <div className="text-center text-muted-foreground">
        ゾーンに入る準備ができました。
        <br />
        さあ、始めましょう！
      </div>
      <Button
        onClick={() => {
          setStart(true)
          setRun(true)
        }}
      >
        始める
      </Button>
    </>
  )
}
