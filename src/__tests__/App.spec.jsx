import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders vite + react', () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});
