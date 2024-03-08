import { FilterWrap, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrap>
      <label htmlFor="filter">Find contacts by name:</label>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={value}
        onChange={onChange}
      />
    </FilterWrap>
  );
};
