import File from '../src/File.js';
import NotExistsError from '../src/errors/NotExistsError.js';
import NotReadableError from '../src/errors/NotReadableError.js';

test('Read', () => {
  const file = new File('/etc/fstab');
  expect(file.read()).not.toBeFalsy();
});

test('NotExistsError', () => {
  const file = new File('/etc/wopwop');
  expect(() => file.read()).toThrow(NotExistsError);
});

test('NotReadableError', () => {
  const file = new File('/etc/shadow');
  expect(() => file.read()).toThrow(NotReadableError);
});
