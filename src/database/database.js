import { openDb } from "../config/configDB.js"
import createTable from "./sqlite/createTable.js"

export async function createPersonTable(){
   const db = await openDb();
   await db.exec(createTable)
   console.log("Tabela gerada com sucesso!")
}