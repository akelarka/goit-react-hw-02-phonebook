import { Component } from 'react';
import PropTypes from 'prop-types';

import { Title, Form, Button, Label, InputName } from './ContactForm.styled';

export class ContactForm extends Component {

    static defaultProps = {
        addContact: PropTypes.func.isRequired,
    };
    
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
            const { addContact } = this.props;
            const { name, number } = this.state;
        return (
            <>
                <Title>Phonebook</Title>
                <Form onSubmit={addContact}>
                <label htmlFor="name">
                    <InputName>Name</InputName>
                    <input
                    onChange={this.handleChange}
                    value={name}
                    id="name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </label>
                <Label htmlFor="number">
                    <InputName>Number</InputName>
                    <input
                    onChange={this.handleChange}
                    value={number}
                    id="number"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    />
                </Label>
                <Button type="submit">
                    Add contact
                </Button>
            </Form>
            </>
        )
        
    }
}

export default ContactForm;