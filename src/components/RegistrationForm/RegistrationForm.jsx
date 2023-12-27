import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(userData));
    setUserData({ name: '', email: '', password: '' });
  };

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} py="4" mx="auto" maxW="400px">
      <FormControl id="name" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder="* Enter your username"
          width="100%"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl mt="10px" id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="* Enter your email address"
          width="100%"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl mt="10px" id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="* Enter your password"
            width="100%"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <InputRightElement width="3rem">
            <Button
              variant="icon"
              h="1.5rem"
              size="sm"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <ViewOffIcon name="view-off" />
              ) : (
                <ViewIcon name="view" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button mt="20px" type="submit" width="100%">
        Register
      </Button>
    </Box>
  );
};
