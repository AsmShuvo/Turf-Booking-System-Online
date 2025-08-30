import { pool } from "../config/db.js";

export async function createUser(username, email, password) {
  const [result] = await pool.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]
  );
  return result.insertId;
}