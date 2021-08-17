import "./App.css";
import React from "react";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import hardCodedContacts from "./data/hardCodedContacts";

import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filter: "",
    };

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.onSearchByName = this.onSearchByName.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
    this.getHardCodedContacts = this.getHardCodedContacts.bind(this);
  }

  addContact({ name, number }) {
    const id = uuidv4();
    const newContact = { name, number, id };

    console.log(newContact);

    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  }

  deleteContact(id) {
    this.setState({
      contacts: [
        ...this.state.contacts.filter((contact) => {
          return contact.id !== id;
        }),
      ],
    });

    if (this.state.filter) {
      this.setState({
        filter: "",
      });
    }
  }

  onSearchByName(inputValue) {
    if (inputValue.trim() === "") {
      this.setState({
        filter: "",
      });
      return;
    }

    this.setState({
      filter: inputValue,
    });
  }

  getHardCodedContacts(checkbox) {
    const startIndex = this.state.contacts.findIndex((el) => el.id === "id-1");

    checkbox.checked
      ? this.setState({
          contacts: [...this.state.contacts, ...hardCodedContacts],
        })
      : this.setState({
          contacts: this.state.contacts.slice(startIndex, startIndex + 7),
        });
  }

  filterContacts() {
    if (this.state.filter === "") {
      return this.state.contacts;
    }

    const searchStr = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchStr);
    });
  }

  render() {
    const contacts = this.filterContacts();

    return (
      <div className="App">
        <Form onNewContactAdd={this.addContact}></Form>
        <Filter onFilterChange={this.onSearchByName}></Filter>
        <Contacts
          contacts={contacts}
          deleteContact={this.deleteContact}
          getHardCodedContacts={this.getHardCodedContacts}
        ></Contacts>
      </div>
    );
  }
}

export default App;
