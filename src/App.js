import React from 'react';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import HardCodeContactsCheckbox from './components/HardCodeCheckbox/HardCodeCheckbox';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { StyledApp, StyledBanner } from './components/AppComponents/AppComponents';

import hardCodedContacts from './data/hardCodedContacts';

import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filter: '',
      name: '',
      number: '',
    };
  }

  //#region class methods

  isValidInput = (event) => {
    if (event.target.value.match(event.target.pattern) === null && event.target.value.length !== 0) {
      return false;
    }
    return true;
  };

  onInputChange = (event) => {
    // if (!this.isValidInput(event)) {
    //   event.target.style = 'background-color: #f7d7d7;';
    // } else {
    //   event.target.style = 'background-color: transparent;';
    // }

    this.setState({ name: event.target.value });
  };

  isNameInContacts = (searchName) => {
    return this.state.contacts.find(({ name }) => name === searchName);
  };

  clearInputs = () => {
    // event.target.querySelector("[name='name']").value = '';
    // event.target.querySelector("[name='number']").value = '';
    // this.setState({
    //   name: '',
    //   number: '',
    // });
  };

  addContact = (event, name, number) => {
    // const name = event.target.querySelector("[name='name']").value;
    // const number = event.target.querySelector("[name='number']").value;
    // console.log(event.target.value);
    console.log(name);
    console.log(number);
    // event.preventDefault();
    if (this.isNameInContacts(name)) {
      const existContactMessage = (name) => toast.warn(`There is an existing contact with name "${name}"!`);
      existContactMessage(name);
      return;
    }

    const id = uuidv4();

    this.setState({
      contacts: [...this.state.contacts, { name, number, id }],
    });

    const addedContactMessage = (name) => toast.success(`New contact "${name}" was added!`);
    addedContactMessage(name);

    this.clearInputs();
  };

  deleteContact = (event) => {
    const id = event.target.value;

    this.setState({
      filter: '',
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
          contacts: this.state.contacts.filter((contactEl) => !hardCodedContacts.includes(contactEl)),
        });
  };

  filterContacts = () => {
    if (this.state.filter === '') {
      return this.state.contacts;
    }

    const searchStr = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(searchStr));
  };

  //#endregion

  render() {
    const contacts = this.filterContacts();

    return (
      <StyledApp>
        <Form
          onNewContactAdd={this.addContact}
          onInputChange={this.onInputChange}
          nameValue={this.state.name}
          numberValue={this.state.number}
        ></Form>
        <HardCodeContactsCheckbox onHardCodedCheckboxChange={this.getHardCodedContacts} />
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
        <ToastContainer />
      </StyledApp>
    );
  }
}

export default App;
