import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './FilterStyle';

const Filter = ({ value, changeFilterName }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        onChange={changeFilterName}
        type="text"
        placeholder="Enter name"
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilterName: PropTypes.func.isRequired,
};

export default Filter;
