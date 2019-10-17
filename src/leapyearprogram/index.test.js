import leapYear from './index';
import { isTSAnyKeyword } from '@babel/types';


it('should throw error if year is less than 1582', () => {
  expect(() => {
    leapYear(1568);
  }).toThrow();
});

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false;
  expect(leapYear(input)).toBe(expectedOutput);
});

it('should return true if leap year is divisible by 4, not 100', () => {
  const input = 2000;
  const expectedOutput = true;

  expect(leapYear(input)).toBe(expectedOutput);
});

it('should be a leap year if divisible by 4, not 100', () => {
  const input = 1984;
  const expectedOutput = true;

  expect(leapYear(input)).toBe(expectedOutput);
});

it('should NOT be a leap year if NOT divisible by 4', () => {
  const input = 1983;
  const expectedOutput = false;

  expect(leapYear(input)).toBe(expectedOutput);
});

