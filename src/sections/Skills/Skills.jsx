
import styles from './SkillsStyles.module.css';
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
// import { useTheme } from '../../common/ThemeContext';

function Skills() {
  // const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="• React" />
        <SkillList skill="• Angular" />
        <SkillList skill="• Node.js" />  
        <SkillList skill="• Drupal" />
        <SkillList skill="• AEM" />
      </div>
      <hr />
      <div className={styles.skillList}> 
        <SkillList skill="• JavaScript" />
        <SkillList skill="• TypeScript" />
        <SkillList skill="• jQuery" />               
      </div>
      <hr />
      <div className={styles.skillList}> 
        <SkillList skill="• HTML" />
        <SkillList skill="• CSS" />
        <SkillList skill="• Sass" />
        <SkillList skill="• Tailwind CSS" />
        <SkillList skill="• Bootstrap" />    
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="• Redux" />
        <SkillList skill="• Webpack" />
        <SkillList skill="• Parcel" />
        <SkillList skill="• Git" />
        <SkillList skill="• Jest" />
      </div>
    </section>
  );
}

export default Skills;
