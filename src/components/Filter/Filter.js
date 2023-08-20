import propTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <Label>Find contacts by name </Label>
    <Input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
