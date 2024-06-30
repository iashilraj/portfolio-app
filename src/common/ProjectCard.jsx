import PropTypes from "prop-types";

function ProjectCard({ src, link, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`logo`} />
      {/* <h3>{h3}</h3> */}
      <p>{p}</p>
    </a>
  );
}

ProjectCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    // h3: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired
  };

export default ProjectCard;