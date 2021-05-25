module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '16px'
    },
    colors: {
      primary: {
        DEFAULT: 'var(--primary)',
        dark: 'var(--primary-dark)',
        light: 'var(--primary-light)'
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        dark: 'var(--secondary-dark)',
        light: 'var(--secondary-light)'
      },
      info: {
        DEFAULT: 'var(--info)',
        dark: 'var(--info-dark)',
        light: 'var(--info-light)'
      },
      success: {
        DEFAULT: 'var(--success)',
        dark: 'var(--success-dark)',
        light: 'var(--success-light)'
      },
      warning: {
        DEFAULT: 'var(--warning)',
        dark: 'var(--warning-dark)',
        light: 'var(--warning-light)'
      },
      danger: {
        DEFAULT: 'var(--danger)',
        dark: 'var(--danger-dark)',
        light: 'var(--danger-light)'
      },
      light: 'var(--light)',
      dark: 'var(--dark)'
    },
    fontSize: {
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px'
    },
    extend: {}
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
}
