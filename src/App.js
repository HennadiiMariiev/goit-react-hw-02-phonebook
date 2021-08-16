import "./App.css";
import React from "react";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";

import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
      name: "",
      number: "",
    };

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.onSearchByName = this.onSearchByName.bind(this);
  }

  addContact({ name, number }) {
    const id = uuidv4();
    const newContact = { name, number, id };

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
  }

  onSearchByName(inputValue) {
    console.log(inputValue);
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addContact}></Form>
        <Filter onSearchByName={this.onSearchByName}></Filter>
        <Contacts
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        ></Contacts>
      </div>
    );
  }
}

export default App;
