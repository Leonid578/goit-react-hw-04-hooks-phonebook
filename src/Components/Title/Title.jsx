import style from './Title.module.css';
import propTypes from 'prop-types';

const Title = ({ text }) => {
  return <div className={style.title}>{text}</div>;
};

Title.propTypes = {
  text: propTypes.string,
};
export default Title;
