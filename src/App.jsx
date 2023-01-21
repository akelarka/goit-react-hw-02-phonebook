import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './modules/components/ContactForm/ContactForm';
import ContactList from './modules/components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHundler = addedContact => {
    this.setState(prevState => ({
      contacts: [addedContact, ...prevState.contacts],
      }));
  }

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContacts = () => {
    const { contacts, filter } = this.state;
    let filtered = contacts;
    if (filter.toLowerCase()) {
      filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return filtered;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHundler} contacts={this.state.contacts}/>
        <ContactList
          findContact = {this.findContact}
          contacts = {this.renderContacts()}
          deleteContact = {this.deleteContact}
        />
      </>
    );
  }
}
