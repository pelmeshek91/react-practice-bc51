// import PropTypes from 'prop-types';
import s from './Section.module.css';
export const Section = ({ children, title }) => {
  return (
    <section className={title ? s.baseSection : s.superSection}>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

// Section.propTypes = {};
