import style from './Contact.module.css';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const Contact = ({ elem, deleteEl }) => {
  console.log('contact')
  return (
    <li className={style.li}>
      {elem.name}: {elem.numberTel}
      <button onClick={() => deleteEl(elem.id)}>
        <FiX className={style.svgFix} />
      </button>
    </li>
  );
};

Contact.propTypes = {
  deleteEl: propTypes.func,
  elem: propTypes.object,
};

export default Contact;
