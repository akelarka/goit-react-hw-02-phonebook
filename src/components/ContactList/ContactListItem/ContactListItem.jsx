import PropTypes from 'prop-types';
import { ContactName, ContactNumber, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
    return (
        <li>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <Button
                className="button buttonList"
                type="button"
                onClick={() => deleteContact(id)}
            >
                Delete
            </Button>
        </li>
    )
};

ContactListItem.propType = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};