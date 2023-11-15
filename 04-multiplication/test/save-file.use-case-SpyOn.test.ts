// import fs from 'fs';
// import { SaveFile } from '../src/domain/use-cases/save-file.use-case';

// describe('saveFileUseCase', () => {
//   const customOptions = {
//     fileContent: 'custom content',
//     fileDestination: `custom-output`,
//     fileName: 'custom-tableName',
//   };

//   const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

//   //* Clean up file

//   /* The `afterEach` function is a hook provided by the testing framework (Jest in this case) that is
//   executed after each test case in the `describe` block. */
//   afterEach(() => {
//     const outputFolderExists = fs.existsSync('outputs');
//     if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

//     const customOutputFolderExists = fs.existsSync(
//       customOptions.fileDestination
//     );
//     if (customOutputFolderExists)
//       fs.rmSync(`${customOptions.fileDestination}`, {
//         recursive: true,
//       });
//   });

//   test('should save file with default values', () => {
//     const saveFile = new SaveFile();
//     const filePath = 'outputs/table.txt';
//     const options = {
//       fileContent: 'This should be mandatory',
//     };

//     const result = saveFile.execute(options);
//     const fileExists = fs.existsSync(filePath);
//     const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

//     expect(result).toBeTruthy();
//     expect(fileExists).toBeTruthy();
//     expect(fileContent).toBe(options.fileContent);
//   });

//   //* Checking with Custom Values

//   test('Should work with custom values', () => {
//     const saveFile = new SaveFile();

//     const result = saveFile.execute(customOptions);
//     const fileExists = fs.existsSync(customFilePath);
//     const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

//     expect(result).toBe(true);
//     expect(fileExists).toBeTruthy();
//     expect(fileContent).toBe(customOptions.fileContent);
//   });

//   test('Should return false if directory could not be created', () => {
//     const saveFile = new SaveFile();
//     /* In the code below, we are creating a mock implementation for the `mkdirSync` function from the `fs` module. */
//     const mkdirMock = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
//       throw new Error('This is a custom error message from testing ');
//     });
//     const result = saveFile.execute(customOptions);

//     expect(result).toBe(false);

//     mkdirMock.mockRestore();
//   });

//   test('Should return false if file could not be created', () => {
//     const saveFile = new SaveFile();
//     const writeFileSyncMock = jest
//       .spyOn(fs, 'writeFileSync')
//       .mockImplementation(() => {
//         throw new Error(
//           'This is a custom error message from testing if write text fail'
//         );
//       });
//     const result = saveFile.execute(customOptions);

//     expect(result).toBe(false);

//     writeFileSyncMock.mockRestore();
//   });
// });
