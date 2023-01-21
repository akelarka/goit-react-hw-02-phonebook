import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Button from '../../../shared/components/Button/Button';
import InputName from '../../../shared/components/InputName/InputName';
import { Title, Form, Label } from './ContactForm.styled';

class ContactForm extends Component {

    static defaultProps = {
        onSubmit: PropTypes.func.isRequired,
    };
    
    state = {
        name: '',
        number: ''
    }
    
    reset = () => {
        this.setState({name: '', number: ''})
    }

    addContact = e => {
        e.preventDefault();
        const { contacts }= this.props;

        const {
            elements: { name, number },
        } = e.currentTarget;

        let addedContact = {
            name: name.value,
            number: number.value,
            id: nanoid(),
        };

        let isAdded = false;

        contacts.map(contact => {
            if (contact.name === name.value) {
            alert(`${name.value} is already in contacts`);
            return (isAdded = true);
            }; 
            if (number.value === '') {
            return (isAdded = true);
            };
            if (name.value === '') {
            return (isAdded = true);
            };
            return isAdded
        });

        this.props.onSubmit(addedContact);
        this.reset(); 
        };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
            const { name, number } = this.state;
        return (
            <>
                <Title>Phonebook</Title>
                <Form onSubmit={this.addContact}>
                <Label htmlFor="name">
                    <InputName text={"Name"}/>
                    <input
                    onChange={this.handleChange}
                    value={name}
                    id="name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </Label>
                <Label htmlFor="number">
                    <InputName text={"Number"}/>
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
                <Button
                type={"submit"}
                text={"Add contact"}
                />
            </Form>
            </>
        )
        
    }
}

export default ContactForm;

ContactForm.propType = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        }).isRequired
    ),
};