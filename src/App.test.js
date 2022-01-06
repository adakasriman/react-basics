import { render, screen } from '@testing-library/react';
import { Axios } from './Topis/Axios';
// import App from './App';

test('renders learn react link', () => {
  render(<Axios />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
