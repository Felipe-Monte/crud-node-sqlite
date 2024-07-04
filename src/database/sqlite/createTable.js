const createTable = `
   CREATE TABLE IF NOT EXISTS Person (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age INTEGER,
   )
`;
export default createTable;
