import PropTypes from "prop-types";

const Filter = ({ onFilterChange, filter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="search"
          value={filter}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
