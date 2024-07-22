'use client'

import { useEffect, useState } from 'react'
import { getRecords, removeRecords } from '../storage/actions'
import { Record } from '../types/record'

export function Scene0({ next }: { next: () => void }) {
  return (
    <>
      <div></div>
      <div className="flex flex-col space-y-4">
        <Records />
      </div>
      <div className="w-full">
        <button className="w-full rounded bg-white p-2 text-sm font-medium text-black" onClick={() => next()}>
          Get Started
        </button>
      </div>
    </>
  )
}

function Records() {
  const [records, setRecords] = useState<Record[] | []>([])

  const handleRefresh = () => {
    removeRecords()
    const data = getRecords()
    setRecords(data)
  }

  useEffect(() => {
    const get = () => {
      const data = getRecords()
      setRecords(data)
    }

    get()
  }, [])

  return (
    <>
      <button onClick={handleRefresh}>全削除</button>
      {records.map((record) => (
        <div key={record.id} className="text-sm">
          <span className="text-muted-foreground">{daysAgo(record.created_at)}: </span>
          <span>{record.message}</span>
        </div>
      ))}
    </>
  )
}

function daysAgo(date: string) {
  const now = new Date()
  const old = new Date(date)

  const differenceInTime = now.getTime() - old.getTime()
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))

  if (differenceInDays === 0) {
    const differenceInHours = Math.floor(differenceInTime / (1000 * 3600))

    if (differenceInHours === 0) {
      const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60))

      if (differenceInMinutes === 0) {
        const differenceInSeconds = Math.floor(differenceInTime / 1000)
        return `${differenceInSeconds}秒前`
      } else {
        return `${differenceInMinutes}分前`
      }
    } else {
      return `${differenceInHours}時間前`
    }
  } else {
    return `${differenceInDays}日前`
  }
}
