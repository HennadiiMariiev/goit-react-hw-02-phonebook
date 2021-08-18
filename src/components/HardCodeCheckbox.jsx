import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;

  color: #2db57f;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

const StyledCheckbox = styled.input`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

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
