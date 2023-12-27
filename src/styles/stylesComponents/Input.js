import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  variants: {
    custom: {
      field: {
        border: '2px solid',
        borderColor: 'brand.dark',
        color: 'brand.main',
        bg: 'none',
        borderRadius: 'full',
        _hover: {
          bg: 'lightTeal',
          transition: '0.5s ease',
        },
        _focus: {
          bg: 'lightTeal',
          transition: '0.5s ease',
        },
        _active: {
          bg: 'lightTeal',
        },
        _isRequired: {
          bg: 'lightTeal',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'custom',
  },
});

export default Input;
