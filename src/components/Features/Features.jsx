import styles from './Features.module.css'

const features = [
  {
    icon: '🌿',
    title: 'הקמת גינות בהתאמה אישית',
    text: 'תכנון ועיצוב גינות ירוקות המותאמות לחלל, לאור ולסגנון החיים שלכם.',
  },
  {
    icon: '🚿',
    title: 'סטיילינג צמחייה למקלחת',
    text: 'עיצוב צמחייה אוהבת לחות שמכניס אווירה טרופית רגועה לכל מקלחת.',
  },
  {
    icon: '🪴',
    title: 'הפיכת פינות בבית',
    text: 'עיצובי צמחים אסתטיים שממלאים פינות ריקות בבית באנרגיה ירוקה ונעימה.',
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