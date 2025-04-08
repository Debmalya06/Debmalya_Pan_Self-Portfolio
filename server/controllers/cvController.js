const cloudinary = require("../utils/Cloudinary.js");
const User = require("../models/Candidate");

const uploadCV = async (req, res) => {
  const userId = req.body.userId;
  const file = req.file;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Delete previous file from cloudinary
    if (user.resumeUrl) {
      const publicId = user.resumeUrl.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(publicId, { resource_type: "raw" });
    }

    // Upload new file
    const result = await cloudinary.uploader.upload_stream(
      {
        resource_type: "raw",
        folder: "resumes"
      },
      async (error, result) => {
        if (error) return res.status(500).json({ error: "Upload failed" });

        user.resumeUrl = result.secure_url;
        await user.save();

        res.json({ message: "Resume uploaded", url: result.secure_url });
      }
    );

    // Pipe file buffer to cloudinary
    require("streamifier").createReadStream(file.buffer).pipe(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { uploadCV };
