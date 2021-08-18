import React from "react";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import HardCodeContactsCheckbox from "./components/HardCodeCheckbox";
import { v4 as uuidv4 } from "uuid";

import hardCodedContacts from "./data/hardCodedContacts";

import styled from "styled-components";

const StyledApp = styled.section`
  background-color: #ffffff;
  border: 1px solid #c15ae0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;

  width: 100%;

  box-shadow: 7px 7px 15px -8px rgba(0, 0, 0, 0.56);
`;

const StyledBanner = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 1rem 1.5rem;
  color: #fafafa;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;

  background-color: #d6d6d6;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filter: "",
    };
  }

  isValidInput = (event) => {
    if (
      event.target.value.match(event.target.pattern) === null &&
      event.target.value.length !== 0
    ) {
      return false;
    }
    return true;
  };

  onInputChange = (event) => {
    if (!this.isValidInput(event)) {
      event.target.style = "background-color: #f7d7d7;";
    } else {
      event.target.style = "background-color: transparent;";
    }
  };

  isNameInContacts = (searchName) => {
    return this.state.contacts.filter(({ name }) => name === searchName)
      .length !== 0
      ? true
      : false;
  };

  clearInputs = (event) => {
    event.target.querySelector("[name='name']").value = "";
    event.target.querySelector("[name='number']").value = "";
  };

  addContact = (event) => {
    const name = event.target.querySelector("[name='name']").value;
    const number = event.target.querySelector("[name='number']").value;

    if (this.isNameInContacts(name)) {
      console.log("there is an existing contact with this name! ");
      return;
    }

    const id = uuidv4();

    this.setState({
      contacts: [...this.state.contacts, { name, number, id }],
    });

    this.clearInputs(event);
  };

  deleteContact = (event) => {
    const id = event.target.value;

    this.setState({
      filter: "",
      contacts: [
        ...this.state.contacts.filter((contact) => {
          return contact.id !== id;
        }),
      ],
    });
  };

  onFilterChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  getHardCodedContacts = (event) => {
    event.target.checked
      ? this.setState({
          contacts: [...this.state.contacts, ...hardCodedContacts],
        })
      : this.setState({
          contacts: this.state.contacts.filter(
            (contactEl) => !hardCodedContacts.includes(contactEl)
          ),
        });
  };

  filterContacts = () => {
    if (this.state.filter === "") {
      return this.state.contacts;
    }

    const searchStr = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchStr)
    );
  };

  render() {
    const contacts = this.filterContacts();

    return (
      <StyledApp>
        <Form
          onNewContactAdd={this.addContact}
          onInputChange={this.onInputChange}
        ></Form>
        <HardCodeContactsCheckbox
          onHardCodedCheckboxChange={this.getHardCodedContacts}
        />
        <Filter
          onFilterChange={this.onFilterChange}
          value={this.state.filter}
          disabled={this.state.contacts.length ? false : true}
        />
        {contacts.length === 0 ? (
          <StyledBanner>No contacts...</StyledBanner>
        ) : (
          <Contacts contacts={contacts} deleteContact={this.deleteContact} />
        )}
      </StyledApp>
    );
  }
}

export default App;
