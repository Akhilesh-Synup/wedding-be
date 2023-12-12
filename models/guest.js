import mongoose from "mongoose";

const guestSchema = mongoose.Schema({
  email: String,
  name: String,
  id: String,
  guest: String,
  message: String,
});

const GuestSchema = mongoose.model("GuestSchema", guestSchema);

export default GuestSchema;
