import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';
import { ThemeContext } from '../App';

describe('Navbar accessibility', () => {
  const renderWithTheme = (ui) =>
    render(
      <ThemeContext.Provider value={{ theme: 'light', setTheme: jest.fn() }}>
        {ui}
      </ThemeContext.Provider>
    );

  it('renders skip link and nav logo', () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByText(/skip to main content/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/scroll to top/i)).toBeInTheDocument();
  });

  it('has accessible hamburger button', () => {
    renderWithTheme(<Navbar />);
    const btn = screen.getByLabelText(/open menu/i);
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('aria-controls', 'nav-menu');
  });
});
