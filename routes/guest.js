import express from "express";
import { createGuest } from "../controllers/guest.js";

const router = express.Router();

// router.get("/", getGuest);
router.post("/", createGuest);

export default router;
