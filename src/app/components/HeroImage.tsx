// HeroImage.tsx

import React from 'react';
import Image from 'next/image'; // Import Image component from next/image
import heroImage from './hero.png'; // Import the hero image

const HeroImage: React.FC = () => {
  return (
    <div>
      <Image src={heroImage} alt="Hero" layout="responsive" width={2} height={3} />
    </div>
  );
};

export default HeroImage;
