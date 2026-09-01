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
        border: 'var(--border)',
        sidebar: 'var(--sidebar)',
        'sidebar-foreground': 'var(--sidebar-foreground)',
        'sidebar-hover': 'var(--sidebar-hover)',
        'sidebar-accent': 'var(--sidebar-accent)',
      },
    },
  },
  plugins: [],
};
