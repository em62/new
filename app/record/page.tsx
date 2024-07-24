'use client'

import { useEffect, useState } from 'react'
import { getRecords, removeRecords } from '../storage/actions'
import { Button } from '@/components/ui/button'
import { ArrowDownWideNarrow, Trash2 } from 'lucide-react'
import { DotsHorizontalIcon, MagnifyingGlassIcon, ReloadIcon } from '@radix-ui/react-icons'
import { Record } from '../types/record'
import { Input } from '@/components/ui/input'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'

export default function Records() {
  const [records, setRecords] = useState<Record[] | []>([])
  const [filteredRecords, setFilterdRecords] = useState<Record[] | []>([])
  const [search, setSearch] = useState(false)
  const [value, setValue] = useState('')

  const handleRefresh = () => {
    removeRecords()
    const data = getRecords()
    data.sort((a: Record, b: Record) => b.created_at - a.created_at)
    setRecords(data)
  }

  const handleReload = () => {
    const data = getRecords()
    data.sort((a: Record, b: Record) => b.created_at - a.created_at)
    setRecords(data)
  }

  useEffect(() => {
    const get = () => {
      const data = getRecords()
      data.sort((a: Record, b: Record) => b.created_at - a.created_at)
      setRecords(data)
    }

    get()
  }, [])

  useEffect(() => {
    setFilterdRecords([])

    if (value.length != 0) {
      const filterd = records.filter((r) => r.message.indexOf(value) !== -1)
      setFilterdRecords(filterd)
      setSearch(true)
    } else {
      setSearch(false)
    }
  }, [value])

  return (
    <div className="mt-[72px]">
      <div className="mx-6 mb-4 flex items-center space-x-2 border-b border-muted pb-1">
        <div className="relative w-full">
          <MagnifyingGlassIcon className="absolute left-0 top-1/2 -translate-y-1/2" />
          <Input placeholder="search message" type="search" value={value} className="text-md w-full border-none p-0 pl-6 focus-visible:ring-transparent" onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="flex items-center space-x-2">
          <Button size="icon" variant="outline" className="h-7 w-7" onClick={handleReload}>
            <ReloadIcon className="h-3.5 w-3.5" />
          </Button>
          <Drawer>
            <DrawerTrigger asChild>
              <Button size="icon" variant="outline" className="h-7 w-7">
                <DotsHorizontalIcon className="h-3.5 w-3.5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="secondary" onClick={handleRefresh}>
                    <Trash2 className="mr-1 h-3.5 w-3.5" />
                    delete All
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="space-y-4 px-6">
        {search
          ? filteredRecords.map((record) => (
              <div key={record.id} className="text-xs">
                <span className="text-muted-foreground">{daysAgo(record.created_at)}: </span>
                <span>
                  {record.message}: {record.id}
                </span>
              </div>
            ))
          : records.map((record) => (
              <div key={record.id} className="text-xs">
                <span className="text-muted-foreground">{daysAgo(record.created_at)}: </span>
                <span>
                  {record.message}: {record.id}
                </span>
              </div>
            ))}
      </div>
    </div>
  )
}

function daysAgo(date: number) {
  const now = new Date()

  const differenceInTime = now.getTime() - date
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))

  if (differenceInDays === 0) {
    const differenceInHours = Math.floor(differenceInTime / (1000 * 3600))

    if (differenceInHours === 0) {
      const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60))

      if (differenceInMinutes === 0) {
        const differenceInSeconds = Math.floor(differenceInTime / 1000)
        return `${differenceInSeconds}s ago`
      } else {
        return `${differenceInMinutes}m ago`
      }
    } else {
      return `${differenceInHours}h ago`
    }
  } else {
    return `${differenceInDays}d ago`
  }
}
