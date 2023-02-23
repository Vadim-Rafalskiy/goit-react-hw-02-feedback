import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (!total) {
    return <Notification message={'There is no feedback'} />;
  }
  return (
    <div className={css.statWrapper}>
      <p className={css.statItem}>Good: {good}</p>
      <p className={css.statItem}>Neutral: {neutral}</p>
      <p className={css.statItem}>Bad: {bad}</p>
      <p className={css.statItem}>Total: {total}</p>
      <p className={css.statItem}>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
