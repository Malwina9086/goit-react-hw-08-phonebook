import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;

    if (!contacts || !Array.isArray(contacts.list)) {
      console.error('Error: contacts is not an array or is undefined');
      return;
    }

    if (
      contacts.list.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('Contact with this name already exists!');
      return;
    }

    const newContact = {
      name,
      phone: number,
    };

    dispatch(createContact(newContact));
    setFormData({ name: '', number: '' });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} my="10">
      <FormControl>
        <FormLabel htmlFor="number">Number</FormLabel>
        <Input
          type="tel"
          name="number"
          maxLength="30"
          pattern="(-)?\d{1,}|(-)?\d{1,}(\.)\d{1,}|(-)?\d{1,}(\s)(-)?\d{1,}|(-)?\d{1,}(\s)(-)?\d{1,}(\s)(-)?\d{1,}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="e.g. 123-456-789"
          required
          mb="4"
          value={formData.number}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          name="name"
          maxLength="30"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="e.g. John Doe"
          required
          mb="4"
          value={formData.name}
          onChange={handleChange}
        />
        <Button type="submit">Add contact</Button>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
