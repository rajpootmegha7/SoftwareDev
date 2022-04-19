import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../containers/Footer/Footer';
import MemoryRouter from 'react-router-dom/BrowserRouter';

describe('Test Render - Footer Container', () => {
  it('Welcome Message Should Appear', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('GitHub - PlantCare 22')).toBeInTheDocument();
  });
});