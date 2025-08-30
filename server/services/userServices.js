import { pool } from "../config/db.js";
import bcrypt from "bcryptjs";

export async function createUser(username, email, password) {
  const salt = 10;
  const passwordHash = await bcrypt.hash(password, salt);
  const [result] = await pool.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, passwordHash]
  );
  return result.insertId;
}
