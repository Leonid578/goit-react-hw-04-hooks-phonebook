import style from './NotContacts.module.css';
import propTypes from 'prop-types';

const NotContacts = ({ text }) => {
  return <div className={style.not}>{text}</div>;
};

NotContacts.propTypes = {
  text: propTypes.string,
};
export default NotContacts;
