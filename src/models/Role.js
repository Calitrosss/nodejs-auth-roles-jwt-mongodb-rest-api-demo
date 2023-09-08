import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default new model("Role", roleSchema);
