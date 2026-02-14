import styles from './MidPageCTA.module.css'

const MidPageCTA = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} reveal`}>
        <h2 className={styles.title}>רוצים גינה בבית?</h2>
        <p className={styles.subtitle}>בואו נדבר על זה בוואטסאפ</p>
        <a
          href="https://wa.me/972524778691"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon}>💬</span>
          <span>שלחו הודעה עכשיו</span>
        </a>
      </div>
    </section>
  );
};

export default MidPageCTA
