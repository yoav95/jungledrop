import styles from './Hero.module.css'
import Logo from './logo5.svg?react';
import videoSrc from '../../assets/sunrise2.mp4?url';

function Hero() {
  return (
    <header className={styles.hero}>
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.heroContent}>
        <div className={styles.logoWrap}>
          <Logo aria-label="JungleDrop לוגו" />
        </div>

        <h1 className={styles.title}>
          תמיד דמיינתם להתקלח ביער טרופי
          <br />
          או לעטוף את הסלון שלכם בירוק?
        </h1>

        <p className={styles.subtitle}>
          עיצוב וגידול צמחים לבית ולחוץ — כולל מערכות סמי-הידרו
        </p>

        <a
          href="https://wa.me/972524778691"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          דברו איתנו
        </a>
      </div>

      <a
        href="https://www.instagram.com/jungledrop_il/"
        className={styles.instagramButton}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      </a>
    </header>
  );
}

export default Hero