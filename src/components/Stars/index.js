import Star from './Star';
import './index.css';
import PropTypes from 'prop-types';

export default function Stars({ count }) {
  if (isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  const maxStarsCount = 5;
  const allStars = [];
  for (let i = 1; i <= maxStarsCount; i++) {
    allStars.push(<Star key={i} />);
  }

  return (
    <ul className="card-body-stars">
      {allStars.slice(0, count)}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
};

Stars.defaultProps = {
  count: 0,
};
