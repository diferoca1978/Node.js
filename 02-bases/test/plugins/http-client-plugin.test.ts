import { describe, expect, it, test } from '@jest/globals';
import { httpClientPlugin } from '../../src/plugins/http-client-plugin';

describe('plugins/http-client-plugin', () => {
  test('httpclientplugin.get should return a string', async () => {
    const data = await httpClientPlugin.get(
      'http://jsonplaceholder.typicode.com/todos/1'
    );
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: expect.any(Boolean),
    });
  });
  test('httpClientPlugin should have POST, PUT and DELETE methods', () => {
    expect(httpClientPlugin.get).not.toBe('undefined');
    expect(httpClientPlugin.post).not.toBe('undefined');
    expect(httpClientPlugin.put).not.toBe('undefined');
    expect(httpClientPlugin.delete).not.toBe('undefined');
  });
});
