const Newsletter = require("../models/newsletter");
const newsletter = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }
  try {
    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }
    const newSubscription = new Newsletter({ email });
    await newSubscription.save();
    res.status(200).json({ message: "Subscription sucessful" });
  } catch (err) {
    console.error("error saving subscription:", err);
    res.status(500).json({ message: "failed to subscribe" });
  }
};
module.exports = newsletter;
