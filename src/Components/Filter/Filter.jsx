import style from './Filter.module.css';
import propTypes from 'prop-types';

const Filter = ({ filter, onFinde }) => {
  return (
    <input
      className={style.inputFinde}
      type="text"
      name="filter"
      value={filter}
      onChange={onFinde}
    />
  );
};
Filter.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
};
export default Filter;
