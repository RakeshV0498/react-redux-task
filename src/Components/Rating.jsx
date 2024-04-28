import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {rating > i ? (
            <AiFillStar fontSize="20px" />
          ) : (
            <AiOutlineStar fontSize="20px" />
          )}
        </span>
      ))}
    </>
  );
};
Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
