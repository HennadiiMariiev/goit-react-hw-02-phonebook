import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSubTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const StyledListItem = styled.li`
  text-align: center;
  text-transform: uppercase;
  color: #2db57f;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

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
