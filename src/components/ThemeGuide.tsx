import React from 'react';
import ThemeToggle from './ThemeToggle';

function ThemeGuide() {
  return (
    <div>
      <ThemeToggle />
      <div
        style={{ backgroundColor: 'var(--c-on-light)', height: '50vh' }}
        className="theme-guide"
      >
        <h1 style={{ color: 'var(--c-primary)' }}>Heading 1</h1>
        <h2 style={{ color: 'var(--c-secondary)' }}>Heading 2</h2>
        <h3 style={{ color: 'var(--c-tertiary)' }}>Heading 3</h3>
      </div>
      <div
        style={{ backgroundColor: 'var(--c-on-dark)', height: '50vh' }}
      ></div>
    </div>
  );
}
export default ThemeGuide;
