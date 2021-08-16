const Contacts = ({ contacts, deleteContact }) => {
  const removeContact = (event) => {
    deleteContact(event.target.value);
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
      <ul>{contactsItems}</ul>
    </div>
  );
};

export default Contacts;
