import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
    test('renders Navbar component', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })

    test('renders Home link', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByText('Home')).toBeInTheDocument();
    })

    test('renders Tasks link', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByText('Tasks')).toBeInTheDocument();
    })

    test('renders Home icon', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        const homeIcon = screen.getByTestId('home-icon');
        expect(homeIcon).toBeInTheDocument();
        
    })

    test('renders Tasks icon', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        const tasksIcon = screen.getByTestId('tasks-icon');
        expect(tasksIcon).toBeInTheDocument();
    })

    test('renders Home link with correct path', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        const homeLink = screen.getByText('Home');
        expect(homeLink).toHaveAttribute('href', '/home');
    })

    test('renders Tasks link with correct path', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        const tasksLink = screen.getByText('Tasks');
        expect(tasksLink).toHaveAttribute('href', '/tasks');
    })
})