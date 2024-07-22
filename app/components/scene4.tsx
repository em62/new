import { useState } from 'react'
import { getRecords, setRecords } from '../storage/actions'
import { format } from 'date-fns'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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
        created_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      },
    ])

    next()
  }

  return start ? (
    <>
      <div className="w-full space-y-2">
        <Textarea value={value} placeholder="Type your message here." onChange={(e) => setValue(e.target.value)} />
        <Button size="sm" onClick={handleClick}>
          Add Record
        </Button>
      </div>
      <div></div>
      <div></div>
    </>
  ) : (
    <>
      <div></div>
      <div className="text-center text-sm">
        お疲れ様でした。
        <br />
        最後に記録しましょう。
      </div>
      <div className="flex w-full flex-col space-y-4">
        <Button size="sm" onClick={() => setStart(true)}>
          記録する
        </Button>
        <Button size="sm" variant="outline" onClick={() => next()}>
          記録せずに終了する
        </Button>
      </div>
    </>
  )
}
