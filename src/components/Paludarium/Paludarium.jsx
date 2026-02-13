import styles from './Paludarium.module.css'

const Paludarium = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bgImage} aria-hidden="true" />
      <div className={styles.content}>
        <h2 className={`${styles.sectionTitle} reveal`}>
          הקמת פלודריום בהתאמה אישית
        </h2>

        <p className={`${styles.sectionText} reveal reveal-delay-1`}>
          פלודריום הוא מערכת אקולוגית חיה המשלבת מים, צמחייה ואלמנטים טבעיים,
          ויוצרת נוכחות רגועה ודינמית בחלל.
        </p>

        <p className={`${styles.sectionText} reveal reveal-delay-2`}>
          כל פלודריום מתוכנן ומוקם בהתאמה מלאה לגודל, לתנאי התאורה ולסביבה שבה
          הוא נמצא — עם דגש על איזון ביולוגי, אסתטיקה ותחזוקה חכמה.
        </p>

        <p className={`${styles.sectionText} reveal reveal-delay-3`}>
          מתאים לבתים, סטודיואים וחללים ייחודיים, ומכניס תחושת טבע חיה
          שממשיכה להשתנות ולהתפתח עם הזמן.
        </p>

        <div className="reveal reveal-delay-3">
          <a
            href="https://wa.me/972XXXXXXXXX"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            רוצים פלודריום? דברו איתנו
          </a>
        </div>
      </div>
    </section>
  );
};

export default Paludarium
