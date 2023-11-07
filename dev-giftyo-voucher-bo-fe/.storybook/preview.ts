import type { Preview } from '@storybook/react';
import PreviewDecorators from './preview-decorators';

const preview: Preview = {
  decorators: PreviewDecorators,
  parameters: {
    viewPort: {
      styles: { width: '2200px', height: '900px' },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
