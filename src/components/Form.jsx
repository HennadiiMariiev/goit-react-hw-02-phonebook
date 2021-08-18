import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

const StyledTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: #2db57f;
  font-size: 2rem;
  margin-bottom: 1rem;

  text-shadow: 1px 1px 1px -2px rgba(0, 0, 0, 0.56);
`;

const StyledLable = styled.label`
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 600;

  color: #2db57f;

  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const StyledInput = styled.input`
  margin-left: 0.75rem;
  display: block;
  min-width: 350px;
  height: 2rem;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 0.5rem 0.5rem 0.25rem;

  border: 0;
  border-bottom: 1px solid #c15ae0;
  color: #1f2120;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
  }

  &:focus {
    outline-color: #c15ae0;
  }
`;

const StyledButton = styled.button`
  width: 250px;
  align-self: center;
  padding: 0.5rem 1rem;
  border: 1px solid #c15ae0;
  border-radius: 0.5rem;

  font-size: 1.5rem;

  text-transform: uppercase;

  color: #c15ae0;
  background: transparent;
  cursor: pointer;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: translateY(-0.15rem);
    box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.56);
  }
`;

const Form = ({ onNewContactAdd, onInputChange }) => {
  const sendContactInfo = (event) => {
    event.preventDefault();
    onNewContactAdd(event);
  };

  return (
    <div>
      <StyledTitle>Phonebook</StyledTitle>
      <StyledForm onSubmit={sendContactInfo}>
        <StyledLable>
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Please, type contact name"
            required
            onChange={onInputChange}
          />
        </StyledLable>
        <StyledLable>
          Number
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="Please, type contact number"
            required
            onChange={onInputChange}
          />
        </StyledLable>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </div>
  );
};

Form.propTypes = {
  onNewContactAdd: PropTypes.func,
};

export default Form;
