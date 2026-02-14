import styles from './Features.module.css'

const features = [
  {
    icon: '🪴',
    title: 'צמחים שגדלים בלי מאמץ',
    text: 'מערכות סמי-הידרו שמפחיתות השקיה ותחזוקה — הצמחים שלכם פשוט משגשגים.',
  },
  {
    icon: '🚿',
    title: 'מקלחת שבה רוצים להישאר',
    text: 'צמחייה שהופכת את חדר האמבטיה לחלל רגוע ומזמין, במקום סתם פינה פונקציונלית.',
  },
  {
    icon: '🌿',
    title: 'בית שנושם ירוק',
    text: 'עיצוב צמחייה שממלא פינות ריקות בחיים, אנרגיה ואוויר נקי יותר.',
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className={`${styles.sectionTitle} reveal`}>מה אנחנו עושים</h2>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div
            key={i}
            className={`${styles.card} reveal reveal-delay-${i + 1}`}
          >
            <span className={styles.icon} aria-hidden="true">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features