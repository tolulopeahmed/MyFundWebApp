import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const logoPath = './logo.png'; // Assuming logo.png is in the same directory

  return (
    <header className={styles.header}>
      {/* MyFund logo */}
      <div className={styles.logo}>
        <Image
          src={logoPath}
          alt="MyFund Logo"
          width={32}
          height={32}
          layout="fill" // Preserve aspect ratio
          quality={100} // Maximum quality during optimization
        />
        <span className={styles.logoText}>MyFund</span>
      </div>

      {/* Main menu */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>SAVE</a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>INVEST</a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>WITHDRAW</a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>FAQs</a></li>
          <li><a href="#" className={`${styles.navItem} ${styles.navItemFont}`}>BLOG</a></li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.loginBtn}`}>LOG IN</button>
        <button className={`${styles.button} ${styles.createAccountBtn}`}>CREATE FREE ACCOUNT</button>
      </div>
    </header>
  );
};

export default Header;
