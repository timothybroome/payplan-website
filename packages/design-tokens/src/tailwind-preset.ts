import type { Config } from 'tailwindcss';
import { colors, typography, layout } from './index.js';

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        pp: {
          deep: colors.deep,
          accent: colors.accent,
          ink: colors.ink,
          cream: colors.cream,
          'cream-warm': colors['cream-warm'],
          line: colors.line,
          berry: colors.berry,
        },
      },
      fontFamily: {
        sans: typography.fontFamily.sans,
      },
      maxWidth: {
        readable: layout.containerReadable,
      },
      borderRadius: {
        pp: layout.radius,
        pill: layout.radiusPill,
      },
      boxShadow: {
        panel: layout.shadowPanel,
      },
    },
  },
};

export default preset;
