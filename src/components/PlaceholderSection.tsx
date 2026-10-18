import styles from './PlaceholderSection.module.css';

interface PlaceholderSectionProps {
  id: string;
  title: string;
  subtitle: string;
  accentColor?: 'blue' | 'violet';
}

/**
 * A reusable placeholder section shown for features not yet implemented.
 * Replace this component with the real section content in future sessions.
 */
const PlaceholderSection = ({
  id,
  title,
  subtitle,
  accentColor = 'blue',
}: PlaceholderSectionProps) => {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div className={`${styles.card} ${styles[accentColor]}`}>
          <div className={styles.icon} aria-hidden="true">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 id={`${id}-heading`} className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <span className={styles.pill}>Coming Soon</span>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;
