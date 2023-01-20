import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../shared/components/Button/Button';
import InputName from '../../../shared/components/InputName/InputName';
import { Title, Form, Label } from './ContactForm.styled';

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