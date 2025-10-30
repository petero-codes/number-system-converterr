import { convertNumber, validateInput } from '@/utils/conversion';

describe('validateInput', () => {
  test('binary valid and invalid', () => {
    expect(validateInput('10101', 2)).toBe(true);
    expect(validateInput('102', 2)).toBe(false);
  });

  test('octal valid and invalid', () => {
    expect(validateInput('76543210', 8)).toBe(true);
    expect(validateInput('8', 8)).toBe(false);
  });

  test('decimal valid and invalid', () => {
    expect(validateInput('-12345', 10)).toBe(true);
    expect(validateInput('12a', 10)).toBe(false);
  });

  test('hex valid and invalid', () => {
    expect(validateInput('deadBEEF', 16)).toBe(true);
    expect(validateInput('xyz', 16)).toBe(false);
  });
});

describe('convertNumber', () => {
  test('decimal to binary', () => {
    const res = convertNumber('10', 10, 2);
    expect(res.output).toBe('1010');
  });

  test('binary to decimal', () => {
    const res = convertNumber('1010', 2, 10);
    expect(res.output).toBe('10');
  });

  test('binary to octal', () => {
    const res = convertNumber('111111', 2, 8);
    expect(res.output).toBe('77');
  });

  test('binary to hex', () => {
    const res = convertNumber('11111111', 2, 16);
    expect(res.output).toBe('FF');
  });

  test('octal to hex', () => {
    const res = convertNumber('777', 8, 16);
    expect(res.output).toBe('1FF');
  });
});


