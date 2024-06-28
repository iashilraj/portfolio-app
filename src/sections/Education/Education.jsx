import styles from './EducationStyles.module.css';

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">Education</h1>
      <div className={styles.educationList}>
        <div className={styles.educationItem}>
          <h2>Master of Computer Applications</h2>
          <p>Amrita Vishwa Vidyapeetham, Mysuru, IN</p>
          <p>May 2018</p>
        </div>
        <div className={styles.educationItem}>
          <h2>Bachelor of Computer Applications</h2>
          <p>Amrita Vishwa Vidyapeetham, Mysuru, IN</p>
          <p>May 2016</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
