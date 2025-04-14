import Featured from '@/components/Featured'
import SpecialOrders from '@/components/SpecialOrders'
import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Featured/>
      <SpecialOrders/>
    </main>
  )
}
