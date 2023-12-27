import { defineStyleConfig } from '@chakra-ui/react';

const FormLabel = defineStyleConfig({
  variants: {
    custom: {
      _focus: {
        color: 'lightTeal',
        transition: '0.5s ease',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'custom',
  },
});

export default FormLabel;
