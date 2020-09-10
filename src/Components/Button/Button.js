import React from "react";
import PropTypes from "prop-types";

const Button = ({ fetchImages }) => {
  return (
    <div className="btn">
      <button className="btn__load-more" onClick={fetchImages}>
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};
