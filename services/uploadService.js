require("dotenv").config();
const { v2: cloudinary } = require("cloudinary");

// Use correct variable names (matching .env file)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary configured");

const uploadImage = async (filePath) => {
  try {
    console.log("Uploading image to Cloudinary...");
    const result = await cloudinary.uploader.upload(filePath);
    const name = result.secure_url.split("/").pop(-1).split(".")[0];
    console.log("name", name);
    return name;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw new Error("Cloudinary upload failed: " + error.message);
  }
};

module.exports = { uploadImage };
