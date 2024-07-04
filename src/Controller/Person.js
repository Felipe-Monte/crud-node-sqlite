import { openDb } from "../config/configDB.js";

export async function createTable() {
  const db = await openDb();
  await db.exec(
    "CREATE TABLE IF NOT EXISTS Person (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"
  );
}

export async function showAllPersons(req, res) {
  const db = await openDb();
  return db.all("SELECT * FROM Person").then((people) => res.json(people));
}

export async function showSpecificPerson(req, res) {
  const id = req.params.id;
  const db = await openDb();
  return db
    .get("SELECT * FROM Person WHERE id=?", [id])
    .then((people) => res.json(people));
}

export async function insertPerson(req, res) {
  const Person = req.body;
  const db = await openDb();
  await db.run("INSERT INTO Person (name, age) VALUES (?, ?)", [
    Person.name,
    Person.age,
  ]);
  res.json({
    statusCode: 200,
    message: "Pessoa inserida com sucesso!",
  });
}

export async function updatePerson(req, res) {
  const Person = req.body;
  const db = await openDb();
  await db.run("UPDATE Person SET name=?, age=? WHERE id=?", [
    Person.name,
    Person.age,
    Person.id,
  ]);
  res.json({
    statusCode: 200,
    message: "Pessoa atualizada com sucesso!",
  });
}

export async function deletePerson(req, res) {
  const id = req.params.id;
  const db = await openDb();
  return db.get("DELETE FROM Person WHERE id=?", [id]).then((people) =>
    res.json({
      statusCode: 200,
      message: "Deletado com sucesso!",
    })
  );
}
