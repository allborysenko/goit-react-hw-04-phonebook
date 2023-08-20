import propTypes from 'prop-types';

import { Wrapper, List, Button } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => (
  <Wrapper>
    <ul>
      {contacts.map((contact, id) => (
        <List key={id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </Button>
        </List>
      ))}
    </ul>
  </Wrapper>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
