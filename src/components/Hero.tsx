import styles from './Hero.module.css';

const Hero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      {/* Ambient background glows */}
      <div className={styles.glowBlue} aria-hidden="true" />
      <div className={styles.glowViolet} aria-hidden="true" />

      <div className={`container ${styles.heroContent}`}>
        {/* Badge */}
        <div className={styles.badge} aria-label="Status badge">
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>Software Engineering Student</span>
        </div>

        {/* Heading */}
        <h1 id="hero-heading" className={styles.heading}>
          Hi, I'm{' '}
          <span className="gradient-text">Mohammed Abdulhadi</span>
          <span className={styles.cursor} aria-hidden="true">.</span>
        </h1>

        {/* Tagline */}
        <p className={styles.tagline}>
          Building Digital Experiences Through Code.
        </p>

        {/* Introduction */}
        <p className={styles.intro}>
          I'm a passionate Software Engineering student at{' '}
          <strong className={styles.highlight}>Arba Minch University</strong>, Ethiopia.
          I love turning ideas into real, working software — writing clean code
          and crafting interfaces that people enjoy using.
        </p>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <button
            id="hero-cta-journey"
            className={styles.btnPrimary}
            onClick={() => handleScroll('journey')}
            aria-label="Scroll to the Journey section"
          >
            <span>Explore My Journey</span>
            <svg
              className={styles.btnIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            id="hero-cta-contact"
            className={styles.btnSecondary}
            onClick={() => handleScroll('contact')}
            aria-label="Scroll to the contact section"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
