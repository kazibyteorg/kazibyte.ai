
import Navbar from '@/components/ui/brand/Navbar';
import PopoverNav from '@/components/ui/brand/PopoverNav';
import CenteredCTA from '@/components/ui/eer/CenteredCTA';

import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />


      <main>
        <CenteredCTA />
      </main>
    </div>
  );
}

export default Home