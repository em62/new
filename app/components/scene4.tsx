import { useState } from 'react'
import { getRecords, setRecords } from '../storage/actions'
import { v4 as uuidv4 } from 'uuid'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function Scene4() {
  const [start, setStart] = useState(false)
  const [value, setValue] = useState('')

  const router = useRouter()

  const handleClick = () => {
    setValue('')
    const records = getRecords()
    setRecords([
      ...records,
      {
        id: uuidv4(),
        message: value,
        created_at: new Date().getTime(),
      },
    ])

    router.push('/')
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
        <Button size="sm" variant="outline">
          記録せずに終了する
        </Button>
      </div>
    </>
  )
}
