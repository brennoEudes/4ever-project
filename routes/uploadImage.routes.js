
import express from "express";
import { uploadImg } from "../config/cloudinary.config";

const uploadImageRouter = express.Router();

// rota p/ upload de arquivo
uploadImageRouter.post("/", uploadImg.single("picture" /* nome p/teste Insômnia */), (req, res) => {
  if (!req.file) {
    return res.status(400).json("Upload failed");
  }

  return res.status(201).json({url: req.file.path});
});

export { uploadImageRouter };
