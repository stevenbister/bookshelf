import { render, screen } from '@testing-library/react';
import Book from '../src/pages/[book]';

const book = {
  title: 'The Eye of the World',
  author: [
    {
      name: 'Robert Jordan',
    },
  ],
  series: 'The Wheel of Time',
  blurb: [
    {
      _key: '7dbedc86f6f4',
      _type: 'block',
      children: [
        {
          _key: 'adc9fcaa8f04',
          _type: 'span',
          marks: [],
          text: 'When she arrives in a small village in the Two Rivers, Moiraine discovers three young men, each of whom might be the long-awaited and reviled Chosen One, the Dragon Reborn. But she is not the only stranger new to the village, nor the only one searching.\n\nIn a race against time and the agents of the Shadow, she must guide her charges through lands of myth and legend, toward allies both new and old, and into the footsteps of prophecy.\n\nThe Wheel of Time turns, and an epic adventure begins.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  cover: {
    url: 'https://cdn.sanity.io/images/vvmrkra8/development/b6474707bb6845cdc5e2f0901067b76c57d2e8f5-1043x1600.webp',
    altText: null,
    metadata: {
      lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwj/xAAnEAACAQQBAgUFAAAAAAAAAAABAgMABAUREhMhBgcxUXEWMkGBsf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/EABoRAQADAQEBAAAAAAAAAAAAAAEAAhEDBEH/2gAMAwEAAhEDEQA/AM38lIsLj5bvI5NjK8cJPTPYVs3hDxLg/pvMZDBrHb5AR8pEY6JPp2rmvBWlzdY2V4CFi3xYFtEj3+KoI5bu0x4tYViCMhXYYb/ZrB287dXZqr0AwJVeNfM6zv8ALxvBZPL04EjdmOjyG9/2isYzKzW2QljY7PYk0VevCoBJvV2N8Zm7iG1jG4olA4Ltd8vmm0t7eSBXiREj1vtHsE/moqFg3SLsOKH7detVOOzEFphL2N3czTjiiqOye5qlh+EBaJ83czzXge46IcoOy+1FJptmVjy5d/U0U8h2f//Z',
    },
  },
  readStatus: ['read'],
  related: null,
};

test('renders the book page with a single author', () => {
  render(
    <Book
      title={book.title}
      author={book.author}
      series={book.series}
      blurb={book.blurb}
      cover={book.cover}
      readStatus={book.readStatus}
      related={book.related}
    />,
  );

  const img = screen.getByRole('img');
  const h1 = screen.getByRole('heading', { level: 1 });
  const series = screen.getByTestId('series');
  const author = screen.getByTestId('author');
  const blurb = screen.getByTestId('blurb');

  expect(img).toBeInTheDocument();
  expect(h1).toHaveTextContent(/the eye of the world/i);
  expect(series).toHaveTextContent(/the wheel of time/i);
  expect(author).toHaveTextContent(/robert jordan/i);
  expect(blurb).toBeInTheDocument();
});

test('renders the book page with two authors', () => {
  book.author = [{ name: 'Robert Jordan' }, { name: 'Brandon Sanderson' }];

  render(
    <Book
      title={book.title}
      author={book.author}
      series={book.series}
      blurb={book.blurb}
      cover={book.cover}
      readStatus={book.readStatus}
      related={book.related}
    />,
  );

  const author = screen.getByTestId('author');

  expect(author).toHaveTextContent(/Robert Jordan, Brandon Sanderson/i);
});
