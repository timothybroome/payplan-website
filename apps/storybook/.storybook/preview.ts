import type { Preview } from '@storybook/react';
import '../styles.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream', value: '#fbfcfd' },
        { name: 'deep', value: '#035875' },
        { name: 'warm', value: '#eef1f4' },
      ],
    },
  },
};

export default preview;
