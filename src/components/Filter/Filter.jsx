import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled';

export const Filter = ({ findContact }) => {
    return (
        <FilterWrapper>
            <h2>Contacts</h2>
            <label>
                <p className="inputName">Find contacts by name</p>
                <input type="text" onChange={findContact} />
            </label>
        </FilterWrapper>
    );
};

Filter.propType = {
    findContact: PropTypes.func.isRequired,
};