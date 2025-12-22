const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json({ success: true, newMessage });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
