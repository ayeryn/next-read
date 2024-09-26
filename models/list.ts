import mongoose, { Schema } from "mongoose";

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "List name is required!"],
  },
  description: { type: String },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const List = mongoose.models?.List || mongoose.model("List", ListSchema);
