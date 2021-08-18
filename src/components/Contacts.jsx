import PropTypes from "prop-types";

const Contacts = ({ contacts, deleteContact }) => {
  const contactsItems = contacts.map(({ name, number, id }) => {
    return (
      <li key={id}>
        <span>Name:</span>
        {name} <span>Number:</span> {number}
        <button onClick={deleteContact} value={id}>
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

Contacts.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default Contacts;
