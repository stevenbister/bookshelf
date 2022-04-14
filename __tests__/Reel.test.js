import { render, screen } from '@testing-library/react';
import fakeData from '../__mocks__/fakeData';
import Reel from '@/components/Reel';

it('renders all of the items in from the data object', () => {
  render(<Reel array={fakeData.allBook} />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
