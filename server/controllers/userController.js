import { createUser } from "../services/userServices.js";

export async function registerUser(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const userId = await createUser(username, email, password);
    res.status(201).json({ message: "User saved!", userId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "DB Error: " + err.message });
  }
}
