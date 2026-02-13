import React from 'react'
import styles from './HowItWorks.module.css'

const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'בחר את הסגנון שלך', description: 'בחר את הסגנון והתחושה שתרצה בביתך.' },
    { number: 2, title: 'בחר צמחים ומוצרים', description: 'בחר צמחים, מצעים וכל האביזרים הדרושים.' },
    { number: 3, title: 'אספקה והתקנה', description: 'נגיע אליך עם כל הציוד או נשלח חבילה מוכנה להתקנה עצמית.' },
    { number: 4, title: 'תהנה מהחלל הירוק שלך', description: 'תתענג על פינות ירוקות, קירות חיים ומקלחות טרופיות.' },
  ];

  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>איך זה עובד</h2>

      <div className={styles.stepsGrid}>
        {steps.map(step => (
          <div key={step.number} className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
