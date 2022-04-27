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
  const setup = () => {
    const { _id, title, cover, series } = fakeData.allBook[1];
    render(
      <ul>
        <ExpandableCard
          key={_id}
          title={title}
          cover={cover}
          relatedBooks={fakeData.allBook}
          numberOfBooks={3}
          ariaControls={kebabCase(series.name)}
          onClick={jest.fn()}
        />
      </ul>,
    );
  };

  it('toggles the aria-expanded when clicked', async () => {
    setup();

    const button = screen.getByRole('button', { name: /The Great Hunt/i });

    expect(button).toHaveAccessibleName();
    expect(button).toHaveAttribute('aria-controls', 'the-wheel-of-time');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getAllByRole('heading', { name: /The Great Hunt/i }));

    userEvent.click(button);

    await waitFor(() =>
      expect(button).toHaveAttribute('aria-expanded', 'true'),
    );

    userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveAttribute('aria-expanded', 'false'),
    );
  });

  it('toggles the aria-expanded when another expandable card is clicked', async () => {
    const bookOne = fakeData.allBook[0];
    const bookTwo = fakeData.allBook[1];

    render(
      <ul>
        <ExpandableCard
          key={bookOne._id}
          title={bookOne.title}
          cover={bookOne.cover}
          relatedBooks={fakeData.allBook}
          numberOfBooks={3}
          ariaControls={kebabCase(bookOne.series.name)}
          onClick={jest.fn()}
        />
        <ExpandableCard
          key={bookTwo._id}
          title={bookTwo.title}
          cover={bookTwo.cover}
          relatedBooks={fakeData.allBook}
          numberOfBooks={3}
          ariaControls={kebabCase(bookTwo.series.name)}
          onClick={jest.fn()}
        />
      </ul>,
    );

    const b1Button = screen.getByRole('button', {
      name: /The Eye of the World/i,
    });
    const b2Button = screen.getByRole('button', { name: /The Great Hunt/i });

    userEvent.click(b1Button);
    await waitFor(() =>
      expect(b1Button).toHaveAttribute('aria-expanded', 'true'),
    );
    await waitFor(() =>
      expect(b2Button).toHaveAttribute('aria-expanded', 'false'),
    );

    userEvent.click(b2Button);
    await waitFor(() =>
      expect(b2Button).toHaveAttribute('aria-expanded', 'true'),
    );
    await waitFor(() =>
      expect(b1Button).toHaveAttribute('aria-expanded', 'false'),
    );
  });

  it("doesn't close the expandable section if a click occurs outside", async () => {
    setup();

    const button = screen.getByRole('button', { name: /The Great Hunt/i });
    const ul = screen.getByRole('list');

    userEvent.click(button);

    await waitFor(() =>
      expect(button).toHaveAttribute('aria-expanded', 'true'),
    );

    userEvent.click(ul);
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
