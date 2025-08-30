import { pool } from "../config/db.js";

export async function getAllTurfs() {
  const [rows] = await pool.query(
    `
    SELECT
      id,
      name,
      location,
      capacity,
      turf_bg,
      operating_hours,
      rent_per_hour,
      rating,
      contact_number,
      contact_email
    FROM
      turfs
    ORDER BY
      id DESC
    `
  );
  return rows;
}
