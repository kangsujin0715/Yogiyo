import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { Decorator } from '@storybook/react';
import { theme } from 'src/components/common/theme/theme';
import 'src/styles/globals.css';

const PreviewDecorators: Decorator = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export default [PreviewDecorators];
