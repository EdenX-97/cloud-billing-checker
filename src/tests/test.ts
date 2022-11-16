import { HelloWorld } from './../index';

test('Test HelloWorld', () => {
  expect(HelloWorld('Eden')).toBe('Hello Eden');
});
