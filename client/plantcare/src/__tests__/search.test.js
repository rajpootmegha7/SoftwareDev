import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../containers/search/search';
import MemoryRouter from 'react-router-dom/BrowserRouter';

// include as many test cases as you want here
describe('Render Search Page', () => {
  it('Should Show Default Plants on Page', () => {
    render(<MemoryRouter><Search/></MemoryRouter>);
    expect(screen.getByText('Results')).toBeInTheDocument();
  });
});