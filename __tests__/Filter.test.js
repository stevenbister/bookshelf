import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fakeData_formatted from '../__mocks__/fakeData_formatted';
import Bookshelf from '@/components/Bookshelf';

const setup = () => {};

test('Renders the filter', () => {
  render(<Bookshelf books={fakeData_formatted} />);

  const authorCheckbox = screen.getByLabelText('A - Z Author');
  const authorSelect = screen.getByLabelText('Author');
  const seriesCheckbox = screen.getByLabelText('A - Z Series');
  const statusSelect = screen.getByLabelText('Status');

  // Sort by author checks
  expect(authorCheckbox).toBeInTheDocument();
  expect(authorCheckbox).toHaveAttribute('checked');
  expect(authorCheckbox).toHaveAttribute('id', 'a-z-author');
  expect(authorCheckbox).toHaveAttribute('type', 'radio');
  expect(authorCheckbox).toHaveAttribute('name', 'sort');
  expect(authorCheckbox).toHaveAttribute('value', 'a-z-author');

  // Sort by series checks
  expect(seriesCheckbox).toBeInTheDocument();
  expect(seriesCheckbox).not.toHaveAttribute('checked');
  expect(seriesCheckbox).toHaveAttribute('id', 'a-z-series');
  expect(seriesCheckbox).toHaveAttribute('type', 'radio');
  expect(seriesCheckbox).toHaveAttribute('name', 'sort');
  expect(seriesCheckbox).toHaveAttribute('value', 'a-z-series');

  // Filter by Author checks
  expect(authorSelect).toBeInTheDocument();
  expect(authorSelect).toHaveAttribute('id', 'author');
  expect(authorSelect).toHaveAttribute('name', 'author');
  expect(authorSelect).toHaveLength(4);

  // Filter by Status checks
  expect(statusSelect).toBeInTheDocument();
  expect(statusSelect).toHaveAttribute('id', 'status');
  expect(statusSelect).toHaveAttribute('name', 'status');
  expect(statusSelect).toHaveLength(4);
});

test('it reorders the data based on the series name', async () => {
  render(<Bookshelf books={fakeData_formatted} />);

  const seriesCheckbox = screen.getByLabelText('A - Z Series');

  expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
    /This is Going to Hurt: Secret Diaries of a Junior Doctor/i,
  );

  userEvent.click(seriesCheckbox);

  await waitFor(() =>
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
      /The Final Empire/i,
    ),
  );
});
