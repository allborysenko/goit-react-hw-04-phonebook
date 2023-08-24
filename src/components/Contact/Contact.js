import { useState } from 'react';

import PropTypes from 'prop-types';
import { Label, Input, Button } from './Contact.styled';

import React from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const handleChange = e => {
  const { name, value } = e.target;
  setName({ [name]: value });
  setNumber({ [name]: value });
};

  const handleSubmit = e => {
    console.log('e', e)
    e.preventDefault();
    const form = e.currentTarget;
      // this.props.onSubmit(this.state);
    form.reset();

    setName('');
    setNumber('');

    
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

Contact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
