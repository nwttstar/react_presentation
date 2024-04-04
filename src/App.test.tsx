import React from 'react';
import { render, screen } from '@testing-library/react';
import LayoutDefault from './components/templates/LayoutDefault';

test('renders learn react link', () => {
  render(<LayoutDefault />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
