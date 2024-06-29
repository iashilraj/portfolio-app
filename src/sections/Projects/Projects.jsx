import styles from './ProjectsStyles.module.css';
import flickspot from '../../assets/flickspot.png';
import rentnest from '../../assets/rentnest.png';
import rg from '../../assets/rg.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={flickspot}
          link="https://github.com/iashilraj/FlickSpot"
          h3="FlickSpot"
          p="Movie Streaming App"
        />
        <ProjectCard
          src={rentnest}
          link="https://github.com/iashilraj/rentnest-app"
          h3="RentNest"
          p="P2P Rental App"
        />
        <ProjectCard
          src={rg}
          link="https://github.com/iashilraj/resolution-generator"
          h3="RG"
          p="Resolution Generator"
        />
      </div>
    </section>
  );
}

export default Projects;