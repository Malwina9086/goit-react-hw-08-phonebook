import { Flex, Box, Spacer } from '@chakra-ui/react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { NavAuth } from '../NavAuth/NavAuth';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center">
      <Box>
        <Navigation />
      </Box>
      <Spacer />
      <Box>{isLoggedIn ? <UserMenu /> : <NavAuth />}</Box>
    </Flex>
  );
};
