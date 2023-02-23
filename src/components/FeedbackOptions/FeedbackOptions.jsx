import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.btnWrapper}>
      <button
        onClick={() => onLeaveFeedback('good')}
        className={`${css.btn} ${css.good}`}
        type={options}
      >
        Good
      </button>
      <button
        onClick={() => onLeaveFeedback('neutral')}
        className={`${css.btn} ${css.neutral}`}
        type={options}
      >
        Neutral
      </button>
      <button
        onClick={() => onLeaveFeedback('bad')}
        className={`${css.btn} ${css.bad}`}
        type={options}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
