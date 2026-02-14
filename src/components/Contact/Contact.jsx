import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} reveal`}>
          בואו נדבר על הפרויקט שלכם
        </h2>

        <p className={`${styles.sectionText} reveal`}>
          יש לכם חזון לשדרג את הבית עם צמחייה? מוזמנים ליצור איתנו קשר
          ונעזור לכם להפוך את החלל שלכם לגן עדן ירוק.
        </p>

        <p className={`${styles.trustText} reveal`}>
          💬 נחזור אליכם תוך יום עבודה אחד
        </p>

        <div className={styles.content}>
          {/* Contact Info */}
          <div className={`${styles.infoCard} reveal reveal-delay-1`}>
            <h3 className={styles.cardTitle}>פרטי התקשרות</h3>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📱</div>
              <div className={styles.infoText}>
                <h4>טלפון</h4>
                <a href="tel:+972524778691">052-477-8691</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>💬</div>
              <div className={styles.infoText}>
                <h4>WhatsApp</h4>
                <a 
                  href="https://wa.me/972524778691" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  שלחו הודעה
                </a>
                <span className={styles.recommended}>מומלץ לתגובה מהירה</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📸</div>
              <div className={styles.infoText}>
                <h4>Instagram</h4>
                <a 
                  href="https://www.instagram.com/jungledrop_il/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  @jungledrop_il
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className={`${styles.form} reveal reveal-delay-2`}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="שם מלא" 
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input 
                type="tel" 
                placeholder="טלפון" 
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea 
                placeholder="ספרו לנו על הפרויקט שלכם..."
                className={styles.textarea}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              שלחו הודעה
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact
