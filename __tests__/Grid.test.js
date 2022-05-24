import { render, screen } from '@testing-library/react';
import fakeData_formatted from '../__mocks__/fakeData_formatted';
import Grid from '@/components/Grid';

it('renders all of the items in from the data object', () => {
  render(<Grid array={fakeData_formatted} />);

  expect(screen.getAllByRole('listitem')).toHaveLength(72);
});
