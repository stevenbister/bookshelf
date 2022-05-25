import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fakeData_formatted from '../__mocks__/fakeData_formatted';
import Bookshelf from '@/components/Bookshelf';

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

describe('sorting and filtering', () => {
  const setup = () => {
    render(<Bookshelf books={fakeData_formatted} />);

    // Should always start with this item
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
      /This is Going to Hurt: Secret Diaries of a Junior Doctor/i,
    );
  };

  test('it reorders the data based on the series name', async () => {
    setup();

    const seriesCheckbox = screen.getByLabelText('A - Z Series');

    await waitFor(() => userEvent.click(seriesCheckbox));

    await waitFor(() =>
      expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
        /The Final Empire/i,
      ),
    );
  });

  test('filters the data based on the author', async () => {
    setup();

    const authorSelect = screen.getByLabelText('Author');

    await waitFor(() =>
      userEvent.selectOptions(authorSelect, 'brandon-sanderson'),
    );

    await waitFor(() =>
      expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
        /Arcanium Unbounded/i,
      ),
    );
  });

  test('filters the data based on the status', async () => {
    setup();

    const statusSelect = screen.getByLabelText('Status');

    await waitFor(() => userEvent.selectOptions(statusSelect, 'reading'));

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
        /The Last Wish/i,
      );
    });
  });

  test('filters the data based on the author and status', async () => {
    setup();

    const authorSelect = screen.getByLabelText('Author');
    const statusSelect = screen.getByLabelText('Status');

    await waitFor(() =>
      userEvent.selectOptions(authorSelect, 'andrzej-sapkowski'),
    );
    await waitFor(() => userEvent.selectOptions(statusSelect, 'reading'));

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
        /The Last Wish/i,
      );
    });
  });

  test('filters and sorts the data', async () => {
    setup();

    const authorSelect = screen.getByLabelText('Author');
    const statusSelect = screen.getByLabelText('Status');
    const seriesCheckbox = screen.getByLabelText('A - Z Series');

    await waitFor(() =>
      userEvent.selectOptions(authorSelect, 'brandon-sanderson'),
    );
    await waitFor(() => userEvent.selectOptions(statusSelect, 'read'));
    await waitFor(() => userEvent.click(seriesCheckbox));

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(
        /The Final Empire/i,
      );
    });
  });

  test('returns no results if there are no matches', async () => {
    setup();

    const statusSelect = screen.getByLabelText('Status');

    await waitFor(() => userEvent.selectOptions(statusSelect, 'not-read'));

    await waitFor(() => {
      expect(screen.getByText('No results'));
    });
  });
});
