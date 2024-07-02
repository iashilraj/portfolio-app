import PropTypes from "prop-types";

function SkillList({ skill }) {
    return (
      <span>
        <p>{skill}</p>
      </span>
    );
  }
  
  SkillList.propTypes = {
    skill: PropTypes.string.isRequired,
  };

  export default SkillList;
