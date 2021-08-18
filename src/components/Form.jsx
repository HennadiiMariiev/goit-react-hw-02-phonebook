import PropTypes from "prop-types";

const Form = ({ onNewContactAdd }) => {
  const nameInput = document.querySelector("[name='name']");
  const numberInput = document.querySelector("[name='number']");

  const clearInputs = () => {
    nameInput.value = "";
    numberInput.value = "";
  };

  const sendContactInfo = () => {
    if (nameInput.value.trim() === "" || numberInput.value.trim() === "")
      return;

    onNewContactAdd({
      name: nameInput.value,
      number: numberInput.value,
    });

    clearInputs();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Please, type contact name here"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="Please, type contact number here"
            required
          />
        </label>
        <button type="button" onClick={sendContactInfo}>
          Add contact
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onNewContactAdd: PropTypes.func,
};

export default Form;
