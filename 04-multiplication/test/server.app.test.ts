import { serverApp } from '../src/presentation/server.app';
import { CreateTable } from '../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../src/domain/use-cases/save-file.use-case';

describe('Server app', () => {
  const options = {
    base: 2,
    limit: 10,
    displayTable: false,
    fileDestination: 'custom-output',
    fileName: 'test-fileName',
  };

  test('should be an instance of ServerApp ', () => {
    const ServerApp = new serverApp();

    expect(ServerApp).toBeInstanceOf(serverApp);
    expect(typeof serverApp.run).toBe('function');
  });

  test('should run serverApp with options', () => {
    //$ Integration test
    // const logSpy = jest.spyOn(console, 'log'); //! When we use jest.spyOn() function without mockImplementation, we are only creating a function that listen that log.
    // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
    // serverApp.run(options);
    // expect(logSpy).toHaveBeenCalledTimes(2);
    // expect(logSpy).toHaveBeenCalledWith('Server running...');
    // expect(logSpy).toHaveBeenLastCalledWith('File created 🆗');
    // expect(createTableSpy).toHaveBeenCalledTimes(1);
    // expect(createTableSpy).toHaveBeenCalledWith({
    //   base: options.base,
    //   limit: options.limit,
    // });
    // expect(saveFileSpy).toHaveBeenCalledTimes(1);
    // expect(saveFileSpy).toHaveBeenCalledWith({
    //   fileContent: expect.any(String),
    //   fileDetination: options.fileDestination,
    //   fileName: options.fileName,
    // });
  });

  test('Should run with custom values mocked', () => {
    //$ Unitary test

    const logMock = jest.fn();
    const createMock = jest.fn();
    const saveFileMock = jest.fn();

    console.log = logMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    serverApp.run(options);
  });
});
