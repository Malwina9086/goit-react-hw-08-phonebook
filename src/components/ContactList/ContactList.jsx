import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/contacts/selectors';
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
          (contact.phone && contact.number.includes(filter))
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
        <SimpleGrid columns={5} spacing={2} overflow="hidden" width="800px">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <Box
                key={id}
                borderWidth="4px"
                borderRadius="1g"
                overflow="hidden"
              >
                <Box p="4">
                  <IconButton
                    icon={<CloseButton />}
                    onClick={() => handleDelete(id)}
                  />
                  <Text>{name}</Text>
                  <Text>{number}</Text>
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
