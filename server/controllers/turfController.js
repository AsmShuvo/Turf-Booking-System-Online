import { getAllTurfs } from "../services/turfService.js";


export async function listTurfs(req, res) {
  try {
    const turfs = await getAllTurfs();
    res.json({ count: turfs.length, turfs });
  } catch (e) {
    console.error("listTurfs:", e);
    res.status(500).json({ message: "DB error" });
  }
}