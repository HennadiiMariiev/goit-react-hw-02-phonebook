import PropTypes from "prop-types";
import { StyledLabel, StyledCheckbox } from "./StyledHardCodedCheckComponents";

const HardCodeContactsCheckbox = ({ onHardCodedCheckboxChange }) => {
  return (
    <StyledLabel>
      <StyledCheckbox
        type="checkbox"
        name="useHardCoded"
        onClick={onHardCodedCheckboxChange}
      />
      Use hard-coded contacts
    </StyledLabel>
  );
};

HardCodeContactsCheckbox.propTypes = {
  onHardCodedCheckboxChange: PropTypes.func,
};

export default HardCodeContactsCheckbox;
