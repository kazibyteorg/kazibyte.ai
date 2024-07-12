import Button from '@/components/common/Button'
import { ModeToggle } from '@/components/common/ModeToggle';
import Navbar from '@/components/ui/brand/Navigation';
import CenteredCTA from '@/components/ui/eer/CenteredCTA';
import Enterprise from '@/components/ui/eer/ER';
import Newsletter from '@/components/ui/eer/Newsletter';
import React from 'react'

const Home = () => {
  return (
    <div>

      <ModeToggle />
      <Navbar />

      <CenteredCTA />
      <Enterprise />
      <Newsletter />
    </div>
  );
}

export default Home