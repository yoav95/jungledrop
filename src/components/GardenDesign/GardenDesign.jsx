import { useState } from 'react'
import styles from './GardenDesign.module.css'

const galleryImages = [
  { src: '/images/outdoor/sd.jpg', alt: 'עיצוב גינה חיצונית' },
  { src: '/images/outdoor/unnamedvv.jpg', alt: 'גינה מעוצבת בחצר' },
  { src: '/images/outdoor/Untitled.jpg', alt: 'נטיעת צמחים בגינה' },
];

const GardenDesign = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`${styles.sectionTitle} reveal`}>
          עיצוב גינות חוץ - הפכו את החצר שלכם לגן עדן ירוק
        </h2>

        <div className={styles.textBlock}>
          <p className={styles.sectionText}>
            גינה מעוצבת היא לא רק פינה ירוקה בחצר - זה מרחב מחיה שמרחיב את הבית
            החוצה. אנחנו מתמחים בתכנון והקמת גינות חוץ המשלבות עיצוב נופי מקצועי
            עם צמחייה מתאימה לאקלים, כדי ליצור מרחב ירוק שנעים לשהות בו כל השנה.
          </p>

          <p className={styles.sectionText}>
            כל גינה מתוכננת בהתאמה אישית לחצר שלכם, לסגנון החיים ולתנאי האקלים.
            אנחנו בוחרים צמחים עמידים ומתאימים - מעצי נוי ועד צמחי נוי ופרחים
            צבעוניים שיוצרים נוף חי ומשתנה לאורך עונות השנה.
          </p>

          <p className={styles.sectionText}>
            התוצאה היא מרחב חוץ מזמין ואסתטי שמשדרג את הבית, מספק נוף ירוק מרגיע
            ומהווה הרחבה טבעית של המרחב המגורים שלכם.
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

export default GardenDesign
