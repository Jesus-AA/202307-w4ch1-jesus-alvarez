import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Info } from './info';

describe('Given the component Info', () => {
  describe('When we render it', () => {
    render(<Info></Info>);
    test('The component should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
