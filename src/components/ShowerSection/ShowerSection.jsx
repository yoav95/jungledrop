import { useState } from 'react'
import styles from './ShowerSection.module.css'

const galleryImages = [
  { src: '/images/shower/1.jpg', alt: 'מקלחת מעוצבת בצמחייה טרופית' },
  { src: '/images/shower/2.jpg', alt: 'צמחים ירוקים במקלחת' },
  { src: '/images/shower/3.jpg', alt: 'עיצוב צמחייה בחדר אמבטיה' },
  { src: '/images/shower/1.jpg', alt: 'מקלחת עם אווירה טרופית' },
];

const ShowerSection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`${styles.sectionTitle} reveal`}>המקלחת היא מקור של רוגע</h2>

        <div className={styles.textBlock}>
            <p className={styles.sectionText}>
              אחרי יום ארוך, עמוס, מלא גירויים או פשוט שגרתי — המקלחת היא אחד
              המקומות היחידים שבהם אנחנו באמת יכולים לעצור. זה מרחב קטן שבו
              המים שוטפים לא רק את הגוף, אלא גם את הרעש, המתח והעומס שנדבק
              אלינו במשך היום.
            </p>

            <p className={styles.sectionText}>
              מחקרים מראים שצמחייה משפיעה באופן ישיר על הרוגע, על תחושת השליטה
              ועל איכות המחשבה. אבל מעבר למחקרים — זה אינטואיטיבי. כולנו
              יודעים שצמחים פשוט מרגיעים.
            </p>

            <p className={styles.sectionText}>
              החום, האדים, הטיפות — כולם מתערבבים עם הירוק ויוצרים תחושה של
              מקלט טרופי קטן. חדר המקלחת הופך למרחב שמטעין אותנו מחדש.
            </p>

            {/* Concrete Benefits */}
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>💧</span>
                <span>מפחית לחות ועובש</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>🪟</span>
                <span>מתאים במיוחד לחדרי רחצה ללא חלון</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>🧘</span>
                <span>הופך את המקלחת לחלל רגוע יותר</span>
              </div>
            </div>
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

export default ShowerSection