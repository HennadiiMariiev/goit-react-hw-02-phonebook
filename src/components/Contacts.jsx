const Contacts = ({ contacts, deleteContact, getHardCodedContacts }) => {
  const removeContact = (event) => {
    deleteContact(event.target.value);
  };

  const onHardCodedCheckboxChange = (event) => {
    getHardCodedContacts(event.target);
  };

  const contactsItems = contacts.map(({ name, number, id }) => {
    return (
      <li key={id}>
        <span>Name:</span>
        {name} <span>Number:</span> {number}
        <button onClick={removeContact} value={id}>
          Remove
        </button>
      </li>
    );
  });

  return (
    <div>
      <h2>Contacts</h2>
      <label>
        <input
          type="checkbox"
          name="useHardCoded"
          onClick={onHardCodedCheckboxChange}
        />
        Use hard-coded contacts
      </label>
      <ul>{contactsItems}</ul>
    </div>
  );
};

export default Contacts;
