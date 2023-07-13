import {render, screen} from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
    test('renders Home page', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        expect(screen.getByText('This is the Home Page')).toBeInTheDocument();

    })

    test('renders Header component', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    })

    test('renders Navbar component', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        expect(screen.getByRole('navigation')).toBeInTheDocument();

    })
})