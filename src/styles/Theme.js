import { extendTheme } from '@chakra-ui/react';

import Button from './stylesComponents/Button';
import FormLabel from './stylesComponents/FormLabel';
import Input from './stylesComponents/Input';

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#EBF8FF',
        color: '#121212',
      },
    },
  },
  colors: {
    brand: {
      main: '#121212',
      dark: '#1D4044',
      teal: '#4FD1C5',
      lightTeal: '#319795',
      lighterTeal: '#2C7A7B ',
    },
  },
  components: {
    Button,
    Input,
    FormLabel,
  },
});

export default theme;
