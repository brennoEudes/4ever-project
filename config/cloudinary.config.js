import cloudinary from "cloudinary";

import { CloudinaryStorage } from "multer-storage-cloudinary";

import multer from "multer";

import * as dotenv from "dotenv";

dotenv.config();

// criando instância Cloudinary
const cloudinaryInst = cloudinary.v2;

// configuração instância Cloudinary (obs: antes, salvar dados Cloudinary no .env)
cloudinaryInst.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryInst,
  params: {
    folder: "pictures", // nome da pasta que vai tb p/ Claudinary
    // format: async (req, file) => "png",
    allowedFormats: ["jpg","png","pdf","jpeg"], // chave que permite diversos formatos!
    use_filename: true,
  },
});

const uploadImg = multer({ storage: storage });

export { uploadImg };
