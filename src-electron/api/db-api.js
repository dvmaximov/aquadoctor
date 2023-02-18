import { readFileSync, writeFileSync } from "fs";
import * as path from "path";

import { liteCopy } from "../../src/services/tools";

let db = null;
export const dir = process.env.PORTABLE_EXECUTABLE_DIR
  ? process.env.PORTABLE_EXECUTABLE_DIR
  : "";

export const loadDb = () => {
  const source = path.resolve(dir, "db.json");
  // const log1 = path.resolve(dir);
  // const log2 = path.resolve(dir, "db.json");
  // const log = path.resolve(dir, "log.txt");
  // console.log(log);
  // console.log(`
  //   source ${source}
  //   dir ${log1}
  //   db ${log2}
  // `);
  // writeFileSync(
  //   log,
  //   `
  //   source ${source}
  //   log1 ${log1}
  //   log2 ${log2}
  // `
  // );

  try {
    db = readFileSync(source, "utf8").toString();
    db = JSON.parse(db);
  } catch {
    db = null;
  }

  return db;
};

const saveDb = async () => {
  try {
    const source = path.resolve(dir, "db.json");
    writeFileSync(source, JSON.stringify(db));
  } catch (e) {
    return false;
  }

  return true;
};

export const getTable = (tableName) => {
  let table = [];
  try {
    table = db[tableName];
  } catch (e) {
    table = [];
  }
  return table;
};

export const setTable = (tableName, table) => {
  const newValue = liteCopy(table);
  db[tableName] = newValue;
  saveDb();
};

// export const insertRecord = (tableName, payload) => {
//   const id = uuidv4();

//   let newRecord = { id, ...payload };
//   newRecord = liteCopy(newRecord);

//   try {
//     db[tableName].push(newRecord);
//     saveDb();
//   } catch {
//     return null;
//   }
//   return newRecord;
// };

// export const editRecord = (tableName, payload) => {
//   const newRecord = liteCopy(payload);
//   const id = newRecord?.id;
//   if (!id) return null;
//   const index = db.findIndex((item) => item.id === id);
//   if (index < 0) return null;
//   db[tableName][index] = newRecord;
//   console.log(db);
//   return newRecord;
// };
