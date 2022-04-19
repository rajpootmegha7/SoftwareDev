import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import MemoryRouter from 'react-router-dom/BrowserRouter';

test('Render Application Without Crashing', () => {
  const div = document.createElement('div');
  render(<MemoryRouter><App /></MemoryRouter>, div);

});