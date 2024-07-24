'use client'

import { useLayoutEffect, useState } from 'react'
import { Scenes } from '../components/scenes'

export default function GetStarted() {
  const [height, setHeight] = useState(0)

  // 画面の高さを取得してリサイズする
  useLayoutEffect(() => {
    const resize = () => {
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', resize)

    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [height])

  if (height == 0) return

  return (
    <div style={{ height: `${height}px` }} className="flex flex-col items-center justify-between px-6 py-10">
      <Scenes />
    </div>
  )
}
