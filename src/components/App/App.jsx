import { AddForm } from '../AddForm/AddForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import React, { Component, Fragment } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = () => {
    const existingName = this.state.contacts.find(
      contact => contact.name === this.state.name,
    );
    if (existingName) {
      alert(`${this.state.name} existing name`);
      return;
    }
    const newRecord = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newRecord, ...contacts],
    }));
    this.setState({ name: '', number: '' });
  };
  updateContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <AddForm
          submit={this.submit}
          input={this.inputChange}
          value={this.state}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} input={this.inputChange} />
        <ContactList
          updatedContacts={this.updateContacts()}
          deleteContact={this.deleteContact}
        />
      </Fragment>
    );
  }
}
export default App;
