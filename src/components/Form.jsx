const Form = (props) => {
  const sendContactInfo = () => {
    const nameInput = document.querySelector("[name='name']");
    const numberInput = document.querySelector("[name='number']");

    if (nameInput.value.trim() === "" || numberInput.value.trim() === "")
      return;

    const newContactInfo = {
      name: nameInput.value,
      number: numberInput.value,
    };
    props.onSubmit(newContactInfo);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <p>Name</p>
      <form>
        <input
          type="text"
          name="name"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Please, type contact name here"
          required
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Please, type contact number here"
          required
        />
        <button type="button" onClick={sendContactInfo}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
