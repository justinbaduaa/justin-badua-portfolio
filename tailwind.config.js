/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // Semantic tokens defined in app/globals.css (light in :root, dark in .dark).
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'sidebar-accent': 'var(--sidebar-accent)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
};
