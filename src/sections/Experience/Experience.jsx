import styles from './ExperienceStyles.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Work Experience</h1>
      <div className={styles.experienceList}>
        <div className={styles.experienceItem}>
          <h2>Technology Analyst, Infosys | Telecommunications Domain</h2>
          <p>Bangalore, IN</p>
          <p>Mar 2022 – Current</p>
          <hr />
          <ul>
            <li>Develop and maintain user-facing webpages using React ensuring web accessibility compliance with WCAG 2.1 AA standards.</li>
            <li>Reduce post-deployment errors through test-driven development with accessibility testing using Jest.</li>
            <li>Achieve sub-second initial page load by implementing on-demand content loading, effective state management, global notifications, and optimized web storage management.</li>
            <li>Implement progressive enhancement and graceful degradation strategies to ensure compatibility and accessibility across different browsers and devices.</li>
            <li>Integrate third-party APIs and libraries into front-end applications, ensuring seamless data integration and enhancing functionality.</li>
            <li>Maintain and troubleshoot Java-based applications, ensuring optimal performance, quick resolution of issues, and minimal downtime for users.</li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h2>Systems Engineer, TCS | Life Science Domain</h2>
          <p>Mumbai, IN</p>
          <p>Nov 2020 – Feb 2022</p>
          <hr />
          <ul>
            <li>Led a team of 4 to develop product showcase app for a pharmaceutical client, enhancing global access to product information.</li>
            <li>Developed and maintained dynamic web pages using Drupal CMS, leveraging its powerful theming and customization features.</li>
            <li>Integrated RESTful APIs and GraphQL endpoints to fetch and manipulate data asynchronously, ensuring seamless integration between front-end interfaces and back-end services.</li>
            <li>Developed custom Drupal modules to extend functionality and meet specific project requirements.</li>
            <li>Implemented performance optimization techniques in Drupal, such as caching strategies, database query optimization, and CDN integration, to achieve fast page load times and improve site performance.</li>
            <li>Led initiatives to implement progressive web app (PWA) features like service workers, offline caching, and push notifications, enhancing user engagement and accessibility across various network conditions.</li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h2>Assistant Systems Engineer, TCS | Entertainment Domain</h2>
          <p>Mumbai, IN</p>
          <p>Nov 2018 – Nov 2020</p>
          <hr />
          <ul>
            <li>Developed scalable and responsive web applications using the Angular framework, ensuring high performance and cross-browser compatibility.</li>
            <li>Engineered dynamic and interactive user interfaces using Angular Animations and Transitions, enhancing user engagement and visual appeal.</li>
            <li>Collaborated with UX/UI designers and backend developers to implement Angular applications that seamlessly integrated design mockups and API specifications, aligning closely with business requirements.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
