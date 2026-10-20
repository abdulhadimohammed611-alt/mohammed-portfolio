import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge} aria-label="Section badge">
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>About Me</span>
          </div>
          <h2 id="about-heading" className={styles.title}>
            Building Practical Solutions with Purpose
          </h2>
          <p className={styles.subtitle}>
            A brief introduction to my academic background, technical focus, and passion for software development.
          </p>
        </div>

        {/* Content Layout */}
        <div className={styles.layout}>
          {/* Main Narrative Card */}
          <div className={styles.bioCard}>
            <p className={styles.lead}>
              Hello! I'm <strong className={styles.strongText}>Mohammed Abdulhadi</strong>, a Software
              Engineering student at <strong className={styles.strongText}>Arba Minch University</strong> in
              Ethiopia.
            </p>
            <p className={styles.paragraph}>
              My journey in computing is driven by an ongoing curiosity about how software systems operate and how
              well-structured engineering can solve real-world problems. I enjoy taking logical challenges and user
              needs, then translating them into clean, structured, and reliable applications.
            </p>
            <p className={styles.paragraph}>
              My primary interest is in software development, particularly building practical web applications. I focus on writing
              clean code and creating dependable, responsive user interfaces that people enjoy using.
            </p>
          </div>

          {/* Quick Details Column */}
          <div className={styles.detailsColumn}>
            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>University</span>
                  <p className={styles.detailValue}>Arba Minch University</p>
                  <span className={styles.detailMeta}>Ethiopia</span>
                </div>
              </div>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>Current Role</span>
                  <p className={styles.detailValue}>Software Engineering Student</p>
                  <span className={styles.detailMeta}>Undergraduate Studies</span>
                </div>
              </div>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>Primary Interests</span>
                  <p className={styles.detailValue}>Software Development</p>
                  <span className={styles.detailMeta}>Building Practical Web Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
