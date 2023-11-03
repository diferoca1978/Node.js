import { describe, expect, it, test } from '@jest/globals';
import { characters } from '../../src/js-foundations/02-destructuring';

describe('js-foundations/02-destructuring', () => {
  test('characters array should be contain only DC characters', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Batman');
  });
});
