import React from 'react';
import Image from 'next/image';
import Header from '@/app/components/header';
import HeroImage from '@/app/components/HeroImage';
import Footer from '@/app/components/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        {/* Main header text */}
        <div className="py-8 px-8">
          <h1 className="text-4xl font-bold">The True Way to Save and Invest</h1>
          <p className="text-lg mt-2">
            MyFund helps you grow your funds towards owning properties for a
            lifetime rent via our national hostel project.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
            CREATE FREE ACCOUNT
          </button>
        </div>

        {/* App store logos */}
        <div className="flex justify-center items-center py-4">
          {/* Assuming logo.png and playstore.png are in the public folder
          <Image src="/logo.png" alt="MyFund Logo" width={32} height={32} />
          <Image src="/playstore.png" alt="App Store Logo" width={32} height={32} /> */}
        </div>
      </div>
      <HeroImage />
      <Footer />
    </div>
  );
};

export default Home;
