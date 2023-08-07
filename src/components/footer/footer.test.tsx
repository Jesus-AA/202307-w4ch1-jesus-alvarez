import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the component Footer', () => {
  describe('When we render it', () => {
    const text = 'The Gentleman pointing at you company.';
    render(<Footer></Footer>);
    test('The component should be in the document', () => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
