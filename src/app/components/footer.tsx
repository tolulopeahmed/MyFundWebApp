// src/app/components/Footer.tsx

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Image src="/logo.png" alt="MyFund Logo" width={32} height={32} />

                    {/* Sections */}
                    <div>
                        <div className="mb-4">
                            <h4 className="text-lg font-bold mb-2">OUR COMPANY</h4>
                            <ul className="list-disc ml-4">
                                <li>About us</li>
                                <li>FAQs</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Download MyFund Mobile App</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-lg font-bold mb-2">FEATURES</h4>
                            <ul className="list-disc ml-4">
                                <li>QuickSave</li>
                                <li>QuickInvest</li>
                                <li>AutoSave</li>
                                <li>AutoInvest</li>
                                <li>Withdrawals</li>
                                <li>Sponsorship Investments</li>
                                <li>Ownership Investments</li>
                                <li>Ranks, Discounts and Rewards</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-lg font-bold mb-2">PROGRAMMES</h4>
                            <ul className="list-disc ml-4">
                                <li>Wealth Leadership Academy</li>
                                <li>Financial Mentoring Class</li>
                                <li>Ownership Investors</li>
                                <li>Monthly Cashflow Game</li>
                                <li>Top Saver of the Month</li>
                                <li>National Hostel Project</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2">SOCIAL LINKS</h4>
                            <ul className="flex space-x-4">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Tiktok</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
