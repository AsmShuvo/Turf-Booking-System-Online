import { Router } from "express";
import { listTurfs } from "../controllers/turfController.js";

const router = Router();

router.get("/", listTurfs);

export default router;
