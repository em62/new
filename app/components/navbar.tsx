import Link from 'next/link'
import Image from 'next/image'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export function Navbar() {
  return (
    <div className="fixed top-0 flex w-full items-center justify-between p-6">
      <Link href="/">
        <Image src="zone.svg" alt="" width={24} height={24} priority={true} />
      </Link>
      <div>
        <HamburgerMenuIcon className="h-4 w-4" />
      </div>
    </div>
  )
}
