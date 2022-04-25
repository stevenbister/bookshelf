import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { kebabCase } from 'lodash';
import fakeData from '../__mocks__/fakeData';
import Card from '@/components/Card/Card';
import ExpandableCard from '@/components/Card/ExpandableCard';

describe('Card', () => {
  const setup = ({ cover }) => {
    const { title, slug } = fakeData.allBook[1];

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
    const { cover } = fakeData.allBook[1];

    setup({
      cover,
    });

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

describe('Expandable card', () => {
  it('toggles the aria-expanded when clicked', async () => {
    const { _id, title, cover, series } = fakeData.allBook[1];

    render(
      <ul>
        <ExpandableCard
          key={_id}
          title={title}
          cover={cover}
          numberOfBooks={3}
          ariaControls={kebabCase(series.name)}
          onClick={jest.fn()}
        />
      </ul>,
    );

    const button = screen.getByRole('button', { name: 'The Great Hunt' });

    expect(button).toHaveAccessibleName();
    expect(button).toHaveAttribute('aria-controls', 'the-wheel-of-time');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getAllByRole('heading', { name: 'The Great Hunt' }));

    userEvent.click(button);

    await waitFor(() =>
      expect(button).toHaveAttribute('aria-expanded', 'true'),
    );

    userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveAttribute('aria-expanded', 'false'),
    );
  });
});
