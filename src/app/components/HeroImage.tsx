import React from 'react';
import Image from 'next/image';

const HeroImage: React.FC = () => {
    return (
        <div className="flex justify-end items-center py-4 px-8">
                <Image src="/logo.png" alt="MyFund Logo" width={32} height={32} />
        </div>
    );
};

export default HeroImage;
