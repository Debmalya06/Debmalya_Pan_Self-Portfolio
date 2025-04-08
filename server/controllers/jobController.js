const Job = require("../models/job");

exports.postJob = async (req, res) => {
  try {
    const companyId = req.user.id;

    if (!companyId) {
      return res.status(400).json({ error: "Unauthorized. No company ID found." });
    }

    const jobData = {
      ...req.body,
      companyId,
    };

    console.log("🔍 Job data to save:", jobData);

    const job = new Job(jobData);
    const savedJob = await job.save();

    res.status(201).json({ message: "Job posted successfully", job: savedJob });
  } catch (err) {
    console.error("❌ Job Post Error:", err.message);
    res.status(500).json({ error: "Failed to post job", details: err.message });
  }
};
