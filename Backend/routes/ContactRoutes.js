import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST: Save contact form data

router.get("/", (req, res) => {
    let response = Contact.find();
    response.then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(500).json({message: err.message});
    });
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;
