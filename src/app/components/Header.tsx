import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import logo from './logo.png'; // Import the playstore image


const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* MyFund logo */}
      <div className={styles.logo}>
      <Image
  src={logo} // Update the path with the correct image location
  alt="MyFund"
  width={260} // Adjust the width (in pixels) as needed for a moderate size
/>





      </div>

      {/* Main menu - desktop view */}
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>SAVE  </a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>INVEST  </a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>WITHDRAW  </a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>FAQs  </a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>BLOG  </a></li>
        </ul>
      </nav>

      {/* Hamburger menu icon - mobile view */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
        <div className={`${styles.hamburgerIcon} ${isMobileMenuOpen ? styles.closeIcon : ''}`}></div>
      </div>

      {/* Buttons - desktop view */}
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.loginBtn}`}>LOG IN TO MYFUND</button>
        <button className={`${styles.button} ${styles.createAccountBtn}`}>CREATE FREE ACCOUNT</button>
      </div>
    </header>
  );
};

export default Header;
