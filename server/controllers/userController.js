import { createUser, getUserByEmail } from "../services/userServices.js";
import bcrypt from "bcryptjs";

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

export async function loginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "email and password required" });

  try {
    const user = await getUserByEmail(email);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    return res.json({
      message: "Login successful",
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "DB Error: " + err.message });
  }
}