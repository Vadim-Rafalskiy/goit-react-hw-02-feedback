import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <div className={css.Section}>
      <h4 className={css.title}>{title}</h4>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
