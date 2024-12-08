import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';


jest.mock('./Navbar.css', () => {});
describe('Navbar', () => {
    it('should render the Navbar correctly', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText('Publicis Sapient')).toBeInTheDocument();
    });

    it('should contain the correct navigation links', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/');
        expect(screen.getByText('Contact')).toBeInTheDocument();
        expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/');
        expect(screen.getByText('FAQ')).toBeInTheDocument();
        expect(screen.getByText('FAQ').closest('a')).toHaveAttribute('href', '/');
    });

    it('should render the navbar toggler button on mobile view', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const togglerButton = screen.getByRole('button', { name: /Toggle navigation/i });
        expect(togglerButton).toBeInTheDocument();
    });
});
