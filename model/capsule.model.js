import { Schema, model } from "mongoose"; // importação do Banco de dados

// Modelo de cápsula
const capsuleSchema = new Schema({
  capsuleTitle: { type: String, required: true, trim: true },
  capsuleDescription: { type: String, maxlength: 100 },
  capsuleReceiverName: { type: String, required: true, trim: true },
  capsuleReceiverEmail: { type: String, required: true, trim: true },
  capsuleReceiverPhone: { type: Number, trim: true },
  capsuleDeliveryDate: { type: Date },
  capsuleSpecialMessage: { type: String, required: true, maxlength: 10000 },
  capsuleAttachedDocument: {
    type: String,
    default:
      "https://res.cloudinary.com/dptsbfvan/image/upload/v1679533946/pictures/file_nqffuu.png",
  },
  capsuleCreator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  } /* Aqui relacionamos o modelo de cápsula c/ o modelo do usuário. Usamos o msm nome do outro model para referenciar! */,
});

export const CapsuleModel = model(
  "Capsule" /* 1º parâmetro: nome do modelo */,
  capsuleSchema /* 2º parâmetro: schema */
); // exportação do modelo
