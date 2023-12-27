import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectContacts,
} from '../../redux/contacts/contactsSlice';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  Text,
  IconButton,
  CloseButton,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.phone
            .replace(/-|\s/g, '')
            .includes(filter.replace(/-|\s/g, ''))
      )
    : [];

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <SimpleGrid columns={5} spacing={10} overflow="hidden">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, phone }) => (
              <Box
                key={id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box p="4">
                  <IconButton
                    icon={<CloseButton />}
                    onClick={() => handleDelete(id)}
                  />
                  <Text>{name}</Text>
                  <Text>{phone}</Text>
                </Box>
              </Box>
            ))
          ) : (
            <Text>No contacts found</Text>
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default ContactList;
