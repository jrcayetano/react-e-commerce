import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const STARS_NUMBER = [1, 2, 3, 4, 5];

  const [numberPart, setNumberPart] = useState(0);
  const [decimalPart, setDecimalPart] = useState(0);

  const calculateRating = (rating) => {
    if (!rating || Number.isNaN(rating)) {
      return;
    }
    setNumberPart(Math.floor(rating));
    setDecimalPart(rating - numberPart);
  };

  useEffect(() => {
    calculateRating(rating);
  });

  return (
    <>
      {STARS_NUMBER.map(
        (star, index) =>
          index < numberPart && (
            <FontAwesomeIcon icon={faStar} key={`star_${index}`} />
          )
      )}
      {decimalPart > 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  rating: 0,
};

export default React.memo(Rating);
