import {render, screen, waitFor} from '@testing-library/react';
import Tasks from '../pages/Tasks';
import { BrowserRouter } from 'react-router-dom';

describe('Tasks', () => {
    test('renders Tasks page', async () => {
        render(<BrowserRouter><Tasks /></BrowserRouter>);
        expect(screen.getByText('Task List')).toBeInTheDocument();
        
        // Wait for the data to load
        await waitFor(() => {
            expect(screen.getByText('Task')).toBeInTheDocument();
          })

    })

    test('renders Header component', () => {
        render(<BrowserRouter><Tasks /></BrowserRouter>);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    })

    test('renders Navbar component', () => {
        render(<BrowserRouter><Tasks /></BrowserRouter>);
        expect(screen.getByRole('navigation')).toBeInTheDocument();

    })
})