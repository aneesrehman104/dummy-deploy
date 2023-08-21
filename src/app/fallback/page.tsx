"use client"
import { useMemberstack } from '@memberstack/react';
import Image from 'next/image'

const  Fallback=()=> {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      fallback-page
    </main>
  )
}
export default Fallback