import { Schema, model, Types } from "mongoose";

const vaultSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, maxlength: 100 },
  receiverInfo: {
    receiverName: { type: String, required: true, trim: true },
    receiverEmail: { type: String, required: true, trim: true },
    receiverPhone: { type: Number, required: true, trim: true },
  },
  deliveryDate: { type: Date },
  message: { type: String, required: true, maxlength: 100000 },
  attachedDocument: { type: String },
  vaultCreator: { type: Types.ObjectsId, ref: "User" },
});

export const VaultModel = model("Vault", vaultSchema);
