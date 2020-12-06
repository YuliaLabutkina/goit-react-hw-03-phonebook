import { Component } from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { Container, MainTitle, ContactTitle } from './AppStyle';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const userContacts = JSON.parse(localStorage.getItem('userContacts'));
    if (userContacts) this.setState({ contacts: userContacts });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('userContacts', JSON.stringify(contacts));
    }
  };

  checkingForExistenceOfSuchName = verifiableName => {
    const { contacts } = this.state;
    const handleName = verifiableName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === handleName);
  };

  handleSubmitContactForm = data => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, data] }));
  };

  changeFilterName = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts.filter(({ id }) => id !== contactId)],
    }));
  };

  filterByName = () => {
    const { filter, contacts } = this.state;
    const searchName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchName),
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.filterByName();

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm
          handleSubmitContactForm={this.handleSubmitContactForm}
          checkingForExistenceOfSuchName={this.checkingForExistenceOfSuchName}
        />
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} changeFilterName={this.changeFilterName} />
        <ContactList
          filterContacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
