'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="mt-[72px] px-6 py-8">
        <h1 className="mb-2 text-2xl font-bold tracking-tight">Creating an environment to concentrate</h1>
        <p className="mb-6 text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellat omnis corrupti illo quidem aliquid.</p>
        <div className="space-x-2">
          <Button size="sm" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href="/record">Record</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
