import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSubTitle = styled.h2`
  color: #2db57f;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 1rem 1.5rem;
  background-color: #d6d6d6;
`;

const StyledButton = styled.button`
  align-self: center;
  padding: 0.25rem 0.75rem;
  border: 1px solid #c15ae0;
  border-radius: 0.5rem;

  font-size: 0.75rem;

  text-transform: uppercase;

  color: #c15ae0;
  background: #ffffff;
  cursor: pointer;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: translateY(-0.1rem);
    box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.56);
  }
`;

const StyledList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

const StyledItem = styled.li`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  background-color: #ffffff;

  padding: 0.5rem 1rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const StyledName = styled.p`
  font-size: 1rem;
  font-weight: 600;

  display: block;
  min-width: 40%;
`;

const StyledNumber = styled.p`
  font-size: 1rem;
  font-weight: 600;
  display: block;
  min-width: 35%;
  color: #2db57f;
`;

const Contacts = ({ contacts, deleteContact }) => {
  const contactsItems = contacts.map(({ name, number, id }) => {
    return (
      <StyledItem key={id}>
        <StyledName>{name}</StyledName>
        <StyledNumber>{number}</StyledNumber>

        <StyledButton onClick={deleteContact} value={id}>
          Remove
        </StyledButton>
      </StyledItem>
    );
  });

  return (
    <StyledDiv>
      <StyledSubTitle>Contacts</StyledSubTitle>
      <StyledList>{contactsItems}</StyledList>
    </StyledDiv>
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
