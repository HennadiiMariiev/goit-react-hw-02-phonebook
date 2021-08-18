import "./App.css";
import React from "react";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import hardCodedContacts from "./data/hardCodedContacts";
import HardCodeContactsCheckbox from "./components/HardCodeCheckbox";

import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filter: "",
    };

    this.addContact = this.addContact.bind(this);
    this.isNameInContacts = this.isNameInContacts.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
    this.getHardCodedContacts = this.getHardCodedContacts.bind(this);
  }

  isNameInContacts(searchName) {
    return this.state.contacts.filter(({ name }) => name === searchName)
      .length !== 0
      ? true
      : false;
  }

  addContact({ name, number }) {
    if (this.isNameInContacts(name)) {
      console.log("there is an existing contact with this name!");
      return;
    }

    const id = uuidv4();

    this.setState({
      contacts: [...this.state.contacts, { name, number, id }],
    });
  }

  deleteContact(event) {
    const id = event.target.value;

    this.setState({
      filter: "",
      contacts: [
        ...this.state.contacts.filter((contact) => {
          return contact.id !== id;
        }),
      ],
    });
  }

  onFilterChange(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  getHardCodedContacts(event) {
    event.target.checked
      ? this.setState({
          contacts: [...this.state.contacts, ...hardCodedContacts],
        })
      : this.setState({
          contacts: this.state.contacts.filter(
            (contactEl) => !hardCodedContacts.includes(contactEl)
          ),
        });
  }

  filterContacts() {
    if (this.state.filter === "") {
      return this.state.contacts;
    }

    const searchStr = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchStr)
    );
  }

  render() {
    const contacts = this.filterContacts();

    return (
      <div className="App">
        <Form onNewContactAdd={this.addContact}></Form>
        <HardCodeContactsCheckbox
          onHardCodedCheckboxChange={this.getHardCodedContacts}
        />
        {contacts.length === 0 ? (
          <p>No contacts here</p>
        ) : (
          <>
            <Filter
              onFilterChange={this.onFilterChange}
              value={this.state.filter}
            />
            <Contacts contacts={contacts} deleteContact={this.deleteContact} />
          </>
        )}
      </div>
    );
  }
}

export default App;
