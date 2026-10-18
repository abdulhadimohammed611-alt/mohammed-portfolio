import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logo} aria-label="Mohammed Abdulhadi — home">
          <span className={styles.logoLetters}>MA</span>
          <span className={styles.logoDot} aria-hidden="true" />
        </div>

        {/* Desktop links */}
        <ul className={styles.navLinks} role="list">
          <li>
            <button
              id="nav-about"
              className={styles.navLink}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              id="nav-journey"
              className={styles.navLink}
              onClick={() => handleNavClick('journey')}
            >
              Journey
            </button>
          </li>
          <li>
            <button
              id="nav-contact"
              className={`${styles.navLink} ${styles.navLinkCta}`}
              onClick={() => handleNavClick('contact')}
            >
              Get in Touch
            </button>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          id="nav-hamburger"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <button className={styles.mobileLink} onClick={() => handleNavClick('about')}>
          About
        </button>
        <button className={styles.mobileLink} onClick={() => handleNavClick('journey')}>
          Journey
        </button>
        <button className={styles.mobileLink} onClick={() => handleNavClick('contact')}>
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Navbar;
