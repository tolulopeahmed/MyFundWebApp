// index.tsx

import React from 'react';
import Header from '@/app/components/Header';
import HeroImage from '@/app/components/HeroImage';
import Footer from '@/app/components/footer';
import styles from './home.module.css'; // Import the CSS file
import Image from 'next/image'; // Import Image component from next/image
import playstoreImage from './playstore.png'; // Import the playstore image
import appstoreImage from './appstore.png'; // Import the appstore image

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={`container mx-auto ${styles.container}`}>
        <div className={`py-8 px-8 ${styles.py8}`}>
          <h1>The True Way to Save and Invest</h1>
          <h2 className={styles.h2}>Save . Buy Properties . Earn Rent</h2>
          <p>MyFund helps you grow your funds towards owning properties for a lifetime rent via our national hostel project.</p>
          <button className={`${styles.button} ${styles.createAccountBtn}`}>CREATE FREE ACCOUNT</button>
          <div className="flex justify-between items-center py-4">
            {/* Use Image component for optimization */}
            <Image src={playstoreImage} alt="Play Store" width={150} height={50} />
            <Image src={appstoreImage} alt="App Store" width={150} height={50} />
          </div>
        </div>
      </div>
      {/* Conditionally render HeroImage component based on screen size */}
      <div className={`container mx-auto ${styles.container}`}>
        <div className={`py-8 px-8 ${styles.py8}`}>
          {/* Use CSS classes for responsive layout */}
          <div className={`hidden md:block ${styles.heroDesktop}`}>
            <HeroImage />
          </div>
          <div className={`md:hidden ${styles.heroMobile}`}>
            <HeroImage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
