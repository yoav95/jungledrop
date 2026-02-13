import React from 'react'
import styles from './Projects.module.css'
const Projects = () => {
  return (
    <section className={styles.projectsSection}>
  <div className={styles.projectsContent}>
    <h2 className={styles.projectsTitle}>פרויקטים</h2>

    <div className={styles.projectRow}>
      <div className={styles.afterColumn}>
        <img
    src="\images\alcohol\after1.jpg"
    alt="After 1"
    className={styles.projectImage}
  />
  <img
    src="\images\alcohol\after2.jpg"
    alt="After 2"
    className={styles.projectImage}
  />
  <img
    src="\images\alcohol\after3.jpg"
    alt="After 3"
    className={styles.projectImage}
  />
      </div>

      <div className={styles.beforeColumn}>
        <img
    src="\images\alcohol\before.jpg"
    alt="After 1"
    className={styles.projectImage}
  />
      </div>
    </div>

<div className={styles.projectRow}>
      <div className={styles.afterColumn}>
        <img
    src="\images\shower\4.jpg"
    alt="After 1"
    className={styles.projectImage}
  />
  <img
    src="\images\shower\bbz2.jpg"
    alt="After 2"
    className={styles.projectImage}
  />
  <img
    src="\images\shower\bbz.jpg"
    alt="After 3"
    className={styles.projectImage}
  />
      </div>

      <div className={styles.beforeColumn}>
        <img
    src="\images\shower\before.jpg"
    alt="After 1"
    className={styles.projectImage}
  />
      </div>
    </div>

  </div>
</section>
  )
}

export default Projects