import { describe, expect, it, test } from '@jest/globals';

describe('App', () => {
  test('should be true', () => {
    // 1. Arrange
    const myArr = ['Juan', 'Diego', 'Liliana'];

    // 2. Act
    const result = myArr.includes('Juan');

    // 3. Assert
    expect(result).toBe(true);
  });
});
