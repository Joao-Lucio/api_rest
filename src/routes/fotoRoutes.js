import { Router } from "express";
import multer from "multer";
import fotoController from "../controllers/FotoController";
import multerConfig from "../config/multerConfig";

const router = new Router();
const upload = multer(multerConfig);

router.post("/", upload.single("foto"), fotoController.store);

export default router;
