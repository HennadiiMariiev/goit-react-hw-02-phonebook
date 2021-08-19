import PropTypes from "prop-types";

import {
  StyledForm,
  StyledTitle,
  StyledLable,
  StyledInput,
  StyledButton,
} from "./StyledFormComponents";

const Form = ({ onNewContactAdd, onInputChange }) => {
  const sendContactInfo = (event) => {
    event.preventDefault();
    onNewContactAdd(event);
  };

  return (
    <>
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
    </>
  );
};

Form.propTypes = {
  onNewContactAdd: PropTypes.func,
};

export default Form;
