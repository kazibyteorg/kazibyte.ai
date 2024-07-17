import React from 'react'
import Navbar from '@/components/ui/nav/Navbar'
import HeroSection from "@/components/ui/hero/HeroSection"
import EnhancedHeroSection from '@/components/ui/hero/EnhancedHeroSection';
const Home = () => {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <EnhancedHeroSection />
    </div>
  )
}

export default Home