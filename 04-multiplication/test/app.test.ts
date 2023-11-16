import { serverApp } from '../src/presentation/server.app';

describe('Test app.ts', () => {
  test('should call server.run with default values', async () => {
    const serverAppMock = jest.fn();
    serverApp.run = serverAppMock;

    process.argv = [
      'node',
      'app.ts',
      '-b',
      '10',
      '-l',
      '20',
      '-s',
      '-n',
      'test-file',
      '-d',
      'custom-output',
    ];
    await import('../src/app');

    expect(serverAppMock).toHaveBeenCalledWith({
      base: 10,
      limit: 20,
      displayTable: true,
      fileName: 'test-file',
      fileDestination: 'custom-output',
    });
  });
});
