import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.content}>
          <p className={styles.name}>
            <span className="gradient-text">Mohammed Abdulhadi</span>
          </p>
          <p className={styles.copy}>
            &copy; {currentYear} — Built with React &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
