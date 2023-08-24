import { nanoid } from 'nanoid';

import { Contact } from './Contact/Contact';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem('contacts');

    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = ([...contacts]);


    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }
    setContacts(contactsLists);
  };

  const handleDelete = e => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setContacts({ [name]: value });
    setFilter({ [name]: value });
  };

  return (
    <>
      <Section title="Phonebook">
        <Contact onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList
          contacts={getFilteredContacts()}
          handleDelete={handleDelete}
        />
      </Section>
    </>
  );
};
