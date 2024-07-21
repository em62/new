'use client'

import { useEffect, useState } from 'react'
import { getRecords, removeRecords } from '../storage/actions'
import { Record } from '../types/record'

export function Scene0({ next }: { next: () => void }) {
  return (
    <>
      <div>top</div>
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
      <button onClick={handleRefresh}>refresh</button>
      {records.map((record) => (
        <div key={record.id} className="text-sm">
          <span>{record.created_at}: </span>
          <span>{record.message}</span>
        </div>
      ))}
    </>
  )
}
