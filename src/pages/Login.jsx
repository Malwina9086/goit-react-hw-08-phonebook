import { Container, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/Login/LoginForm';

export default function Login() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box padding="6" mt="10">
        <Heading size="xl">LOGIN TO YOUR ACCOUNT</Heading>
        <LoginForm />
        DON'T HAVE AN ACCOUNT?{' '}
        <Link to="/register" style={{ textDecoration: 'underline' }}>
          Register here.
        </Link>
      </Box>
    </Container>
  );
}
