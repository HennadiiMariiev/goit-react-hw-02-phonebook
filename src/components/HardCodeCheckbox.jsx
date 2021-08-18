import PropTypes from "prop-types";

const HardCodeContactsCheckbox = ({ onHardCodedCheckboxChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        name="useHardCoded"
        onClick={onHardCodedCheckboxChange}
      />
      Use hard-coded contacts
    </label>
  );
};

HardCodeContactsCheckbox.propTypes = {
  onHardCodedCheckboxChange: PropTypes.func,
};

export default HardCodeContactsCheckbox;
