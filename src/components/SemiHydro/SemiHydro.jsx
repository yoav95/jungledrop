import styles from './SemiHydro.module.css'

const cards = [
  {
    icon: '💧',
    title: 'פחות השקיה',
    text: 'ממלאים מים פעם בכמה שבועות — המערכת דואגת לשאר.',
  },
  {
    icon: '🌱',
    title: 'בריאות שורשים',
    text: 'השורשים גדלים לעומק ונמנעים מריקבון בזכות זרימת אוויר קבועה.',
  },
  {
    icon: '🛡️',
    title: 'פחות מזיקים',
    text: 'המצע נשאר יבש בחלק העליון ולכן אין זבובי פטרייה.',
  },
];

const SemiHydro = () => {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.sectionTitle} reveal`}>
        שיטת גידול סמיהיידרו — העתיד של צמחי הבית
      </h2>

      <p className={`${styles.sectionText} reveal`}>
        דמיינו צמחים ירוקים, בריאים ומלאי חיים בלי דאגות מהשקיה מדי יום,
        מזיקים או קריסת שורשים. שיטת הסמיהיידרו היא השיטה החדשנית ביותר לגידול
        צמחי בית, המבוססת על מצע אנאורגני וניקוז מדויק.
      </p>

      <div className={styles.cardRow}>
        {cards.map((c, i) => (
          <div
            key={i}
            className={`${styles.card} reveal reveal-delay-${i + 1}`}
          >
            <span className={styles.icon} aria-hidden="true">{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SemiHydro