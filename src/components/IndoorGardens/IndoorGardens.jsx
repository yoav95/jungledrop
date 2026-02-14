import { useState } from 'react'
import styles from './IndoorGardens.module.css'

const galleryImages = [
  { src: '/images/alcohol/adss.jpg', alt: 'עיצוב צמחייה בסלון' },
  { src: '/images/alcohol/ds.jpg', alt: 'גינה פנימית בחדר' },
  { src: '/images/alcohol/v3.jpg', alt: 'קיר של צמחים בחדר עבודה' },
  { src: '/images/alcohol/adss.jpg', alt: 'פינת צמחים בסלון' },
];

const IndoorGardens = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`${styles.sectionTitle} reveal`}>עיצוב צמחים בחלל פנימי</h2>

        <div className={styles.textBlock}>
            <p className={styles.sectionText}>
              הבית שלך הוא המקום שלך להירגע, להיות משם ולהתחבר למה שחשוב לך.
              צמחים בחלל פנימי זה לא רק ביוטיפול — זה שינוי מלא של האנרגיה של החלל.
              מן הרגע שאתה נכנס לדלת, את חווה הפרש.
            </p>

            <p className={styles.sectionText}>
              אנחנו מתכננים עיצובי צמחים שמתאימים לדפוס החיים שלך. בין אם זה פינת
              קריאה שקטה עם צמחים תלויים, דופן ירוק בחדר העבודה, או אוספת צמחים
              שמוסיפה אישיות לסלון שלך.
            </p>

            <p className={styles.sectionText}>
              כל עיצוב משלב וניקה טבעית, צבע בחיים וחיבור לטבע — גם כשאנחנו בתוך
              ארבע קירות. צמחים הם לא רק דקורציה, הם חלק מחיים יותר בריאים, שלמים וטבעיים.
            </p>
        </div>

        {/* Gallery */}
        <div className={styles.gallery}>
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={styles.galleryItem}
                onClick={() => setSelectedImg(img)}
                role="button"
                tabIndex={0}
                aria-label={`פתח ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.galleryImg}
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className={styles.modal}
          onClick={() => setSelectedImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="תמונה מוגדלת"
        >
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedImg(null)}
              aria-label="סגור"
              type="button"
            >
              ✕
            </button>
            <img src={selectedImg.src} alt={selectedImg.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default IndoorGardens
