import {render, screen} from '@testing-library/react';
import NoPage from '../pages/NoPage';
import { BrowserRouter } from 'react-router-dom';

describe('NoPage', () => {
    test('renders NoPage page', () => {
        render(<BrowserRouter><NoPage /></BrowserRouter>);
        expect(screen.getByText('Page not found')).toBeInTheDocument();

    })

    test('renders Header component', () => {
        render(<BrowserRouter><NoPage /></BrowserRouter>);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    })

    test('renders Navbar component', () => {
        render(<BrowserRouter><NoPage /></BrowserRouter>);
        expect(screen.getByRole('navigation')).toBeInTheDocument();

    })
})