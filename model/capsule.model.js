import { Schema, model } from "mongoose";

const capsuleSchema = new Schema({
  capsuleTitle: { type: String, required: true, trim: true },
  capsuleDescription: { type: String, maxlength: 100 },
  capsuleReceiverName: { type: String, required: true, trim: true },
  capsuleReceiverEmail: { type: String, required: true, trim: true },
  capsuleReceiverPhone: { type: Number, required: true, trim: true },
  capsuleDeliveryDate: { type: Date },
  capsuleMessage: { type: String, required: true, maxlength: 100000 },
  capsuleAttachedDocument: { type: String },
  capsuleCreator: { type: Schema.Types.ObjectId, ref: "User" },
});

export const CapsuleModel = model("Capsule", capsuleSchema);
