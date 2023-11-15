import { CreateTable } from '../src/domain/use-cases/create-table.use-case';

//* Here we are check if createTable is an instance of CreateTable

describe('create-table.use-case.ts', () => {
  test('CreateTable Should create a table with default values', () => {
    const createTable = new CreateTable();

    const tableData = createTable.execute({ base: 3, limit: 10 });

    const rows = tableData.split('\n').length;

    expect(createTable).toBeInstanceOf(CreateTable);

    expect(tableData).toContain('3 x 0 = 0');

    expect(rows).toBe(11);
  });
  test('Sholuld create table with custom values', () => {
    const createTable = new CreateTable();

    const options = {
      base: 2,
      limit: 20,
    };

    const tableoptions = createTable.execute(options);

    expect(tableoptions).toContain('2 x 0 = 0');
    expect(tableoptions).toContain('2 x 10 = 20');
    expect(tableoptions).toContain('2 x 20 = 40');
    expect(options).toHaveProperty('base', 2);
    expect(options).toHaveProperty('limit', 20);
  });
});
