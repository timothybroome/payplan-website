export const colors = {
  deep: '#035875',
  accent: '#0090d1',
  ink: '#24201b',
  cream: '#fbfcfd',
  'cream-warm': '#eef1f4',
  line: '#d5dce2',
  berry: '#a8334d',
} as const;

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
  },
  classes: {
    'h-display': {
      fontSize: 'clamp(56px, 10vw, 140px)',
      fontWeight: '500',
      lineHeight: '0.95',
      letterSpacing: '-0.04em',
    },
    'h-section': {
      fontSize: 'clamp(38px, 5.5vw, 68px)',
      fontWeight: '500',
      lineHeight: '1.05',
      letterSpacing: '-0.025em',
    },
    'h-sub': {
      fontSize: '22px',
      fontWeight: '500',
      lineHeight: '1.25',
      letterSpacing: '-0.01em',
    },
    'h-tag': {
      fontSize: '13px',
      fontWeight: '600',
      lineHeight: '1.4',
      letterSpacing: '0.04em',
    },
    lede: {
      fontSize: '22px',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '-0.005em',
    },
    'prose-body': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.7',
      letterSpacing: '0',
    },
  },
} as const;

export const layout = {
  containerReadable: '1180px',
  radius: '20px',
  radiusPill: '9999px',
  shadowPanel: '-8px 12px 32px rgba(36, 32, 27, 0.07)',
} as const;

export type Color = keyof typeof colors;
export type TypographyClass = keyof typeof typography.classes;
