const express = require("express");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const SUPABASE_URL = process.env.SUPABASE_URL;

const supabase = createClient(SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL);

const upload = multer();

router.post("/", authenticateToken, upload.single("file"), async (req, res) => {
  try {
    console.log("File uploaded:", req.file);
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileBuffer = req.file.buffer;
    const originalName = req.file.originalname;
    const mimeType = req.file.mimetype;

    const fileExt = originalName.split(".").pop() || "jpg";
    const fileName = `images/${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, fileBuffer, {
        contentType: mimeType,
        upsert: false,
      });

    if (error) {
      console.error("Upload error:", error);
      return res.status(500).json({ error: error.message });
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(fileName);

    res.status(200).json({ url: publicUrl });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
