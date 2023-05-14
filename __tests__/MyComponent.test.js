// __tests__/MyComponent.test.js

import React from 'react'; // <- Add this line
import { render, screen } from '@testing-library/react';
import MyComponent from '../src/app/MyComponent';

test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});