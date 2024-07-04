import { openDb } from "../config/configDB.js";
import AppError from "../utils/AppError.js"

class PersonController {
   async index(req, res) {
    const db = await openDb();
    return db.all("SELECT * FROM Person").then((people) => res.json(people));
  }
  
   async show(req, res) {
    const id = req.params.id;
    const db = await openDb();
  
    const person = await db.get("SELECT * FROM Person WHERE id=?", [id])
   
    if(!person){
      throw new AppError("Pessoa não existe no banco", 404)
    }else{
      return db.get("SELECT * FROM Person WHERE id=?", [id])
      .then((people) => res.json(people));
    }
  }
  
   async create(req, res) {
    const Person = req.body;
    if(!req.body.name || !req.body.age){
      throw new AppError("Campo nome e idade não podem estar vazio!", 400)
    }else{
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
  }
  
   async update(req, res) {
    const id = req.body.id
    const Person = req.body;
    const db = await openDb();
  
    const person = await db.get("SELECT * FROM Person WHERE id=?", [id])
 
    if(!person){
      throw new AppError("Pessoa não encontrada no banco", 404)
    }else{
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
  }
  
   async delete(req, res) {
    const id = req.params.id;
    const db = await openDb();
  
    const person = await db.get("SELECT * FROM Person WHERE id=?", [id])
  
    if(!person){
      throw new AppError("Pessoa não encontrada no banco!")
    }else{
      return db.get("DELETE FROM Person WHERE id=?", [id]).then((people) =>
        res.json({
          statusCode: 200,
          message: "Deletado com sucesso!",
        })
      );
    }
  }
}

export default PersonController;