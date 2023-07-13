import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
    test('renders Header component', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    })

    test('renders Nokia App text', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getByText('Nokia App')).toBeInTheDocument();
    })
})