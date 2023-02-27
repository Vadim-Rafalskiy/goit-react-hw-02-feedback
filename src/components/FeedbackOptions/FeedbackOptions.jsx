import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const elements = options.map((option, index) => (
    <button
      key={index}
      onClick={() => onLeaveFeedback(option)}
      className={`${css.btn} ${css[option]}`}
      type="bytton"
    >
      {option}
    </button>
  ));
  return <div className={css.btnWrapper}>{elements}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
