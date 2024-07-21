import { useState } from 'react'
import { getRecords, setRecords } from '../storage/actions'
import { format } from 'date-fns'

export function Scene4({ next }: { next: () => void }) {
  const [start, setStart] = useState(false)
  const [value, setValue] = useState('')

  const handleClick = () => {
    setValue('')
    const records = getRecords()
    setRecords([
      ...records,
      {
        id: Math.floor(Math.random() * 10000),
        message: value,
        created_at: format(new Date(), 'yyyy-MM-dd HH:mm'),
      },
    ])

    next()
  }

  return start ? (
    <>
      <textarea className="text-black" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>submit</button>
    </>
  ) : (
    <>
      <div></div>
      <div className="text-center text-sm">
        お疲れ様でした。
        <br />
        最後に記録しましょう。
      </div>
      <div>
        <button onClick={() => next()}>記録せずに終了する</button>
        <button onClick={() => setStart(true)}>記録する</button>
      </div>
    </>
  )
}
