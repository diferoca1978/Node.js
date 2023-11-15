const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import('../src/config/plugins/argsv.plugin');
  return yarg;
};

describe('Test argv.plugin.ts', () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });
  test('Should return default values', async () => {
    const argv = await runCommand(['-b', '5']);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: 'Multiplication-table',
        d: 'outputs.2',
      })
    );
  });
});
