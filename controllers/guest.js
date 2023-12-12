// import mongoose from "mongoose";
import Guest from "../models/guest.js";

export const createGuest = async (req, res) => {
  const data = req.body.data;

  const guestData = data;

  const existingGuest = await Guest.findOne({ email: guestData?.email });

  const newGuest = new Guest(guestData);

  if (existingGuest) {
    return res.status(409).json("User already exists");
  }
  try {
    const guest = await newGuest.save();
    console.log(guest);
    res.status(201).json(newGuest);
  } catch (err) {
    res.json(err);
  }
};
