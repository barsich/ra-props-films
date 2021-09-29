import Star from './Star';
import './index.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function Stars({ count }) {
  if (isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  const stars = [];
  for (let i = 1; i <= count; i++) {
    stars.push(<Star id={uuidv4()} />);
  }

  return (
    <ul className="card-body-stars">
      {stars}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
};

Stars.defaultProps = {
  count: 0,
};
