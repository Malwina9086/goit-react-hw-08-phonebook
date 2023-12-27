import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  variants: {
    solid: {
      bg: 'brand.teal',
      color: 'brand.main',
      borderRadius: 50,
      _hover: {
        bg: 'lightTeal',
        borderRadius: 'none',
        transition: '0.5s ease',
      },
      _active: {
        bg: 'lighterTeal',
        borderRadius: 'none',
      },
    },
    solidActive: {
      bg: 'lightTeal',
      borderRadius: 'none',
    },
    icon: {
      color: 'brand.main',
      borderRadius: 50,
      _hover: {
        bg: 'lightTeal',
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

export default Button;
