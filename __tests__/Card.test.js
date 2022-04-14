import { render, screen } from '@testing-library/react';
import fakeData from '../__mocks__/fakeData';
import Card from '@/components/Card';

const setup = ({ cover }) => {
  const { title } = fakeData.allBook[1];
  const slug = fakeData.allBook[1].slug.current;

  render(<Card title={title} slug={slug} cover={cover} />);

  expect(screen.getByRole('link')).toBeInTheDocument();

  expect(
    screen.getByRole('heading', {
      name: 'The Great Hunt',
    }),
  ).toBeInTheDocument();
};

it('renders the card component without an image', () => {
  setup({});
});

it('renders the full card component', () => {
  const cover = fakeData.allBook[1].cover;

  setup({
    cover,
  });

  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});
