import styles from './Hero.module.css'
import Logo from './logo5.svg?react';
import videoSrc from '../../assets/sunrise.mp4?url';

function Hero() {
  return (
    <header className={styles.hero}>
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        playsInline
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
          אנחנו כאן כדי להכניס את הטבע האקזוטי פנימה, עם צמחייה חיה
          שמנקה ומחייה את האוויר בביתכם.
        </p>

        <a
          href="https://wa.me/972XXXXXXXXX"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          דברו איתנו
        </a>
      </div>
    </header>
  );
}

export default Hero