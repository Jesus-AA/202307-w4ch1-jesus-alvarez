import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Gentlemen } from './gentlemenspecs';

describe('Given the component Gentlemen', () => {
  describe('When we render it', () => {
    render(<Gentlemen></Gentlemen>);
    test('The component should be in the document', () => {
      const element = screen.getByRole('main');
      expect(element).toBeInTheDocument();
    });
  });
});
