import { Schema, model } from "mongoose";

const capsuleSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, maxlength: 100 },
  receiverName: { type: String, required: true, trim: true },
  receiverEmail: { type: String, required: true, trim: true },
  receiverPhone: { type: Number, required: true, trim: true },
  deliveryDate: { type: Date },
  message: { type: String, required: true, maxlength: 100000 },
  attachedDocument: { type: String },
  capsuleCreator: { type: Schema.Types.ObjectId, ref: "User" },
});

export const CapsuleModel = model("Capsule", capsuleSchema);
