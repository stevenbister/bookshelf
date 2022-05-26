import pluralise from '@/lib/pluralise';

test('it pluralises string if the count is not equal to 1', () => {
  const count = 5;

  expect(pluralise(`there are ${count} book`, count)).toEqual(
    `there are ${count} books`,
  );
});

test('it does not pluralis the string if the count is equal to 1', () => {
  const count = 1;

  expect(pluralise(`there is ${count} book`, count)).toEqual(
    `there is ${count} book`,
  );
});
