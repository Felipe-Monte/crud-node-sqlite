import { openDb } from "../configDB.js";

export async function createTable() {
  const db = await openDb();
  await db.exec('CREATE TABLE IF NOT EXISTS Person (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)');
}

export async function insertPerson(Person) {
  const db = await openDb();
  await db.run('INSERT INTO Person (name, age) VALUES (?, ?)', [Person.name, Person.age]);
}

export async function updatePerson(Person) {
  const db = await openDb();
  await db.run('UPDATE Person SET name=?, age=? WHERE id=?', [Person.name, Person.age, Person.id]);
}
