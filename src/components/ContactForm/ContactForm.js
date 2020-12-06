import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Form, LabelForm, InputForm, Button } from './ContactFormStyle';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const repeatName = this.props.checkingForExistenceOfSuchName(name);

    if (repeatName) {
      alert(`${name} is already in contact`);
    } else {
      const newContact = { id: uuidv4(), name, number };
      this.props.handleSubmitContactForm(newContact);
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <LabelForm>
          Name
          <InputForm
            onChange={this.handleChange}
            type="text"
            name={'name'}
            placeholder="Enter name"
            value={name}
            required
          />
        </LabelForm>
        <LabelForm>
          Number
          <InputForm
            onChange={this.handleChange}
            type="tel"
            name={'number'}
            placeholder="Enter number"
            value={number}
            required
          />
        </LabelForm>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmitContactForm: PropTypes.func.isRequired,
};

export default ContactForm;
