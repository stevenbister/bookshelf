import { render, screen } from '@testing-library/react';
import fakeData from '../__mocks__/fakeData';
import Grid from '@/components/Grid';

it('renders all of the items in from the data object', () => {
  render(<Grid array={fakeData.allBook} />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
