const mongoose = require("mongoose");

const dietSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goal: {
      type: String,
      required: true,
      enum: ["fat_loss", "muscle_gain", "maintenance"],
    },

    weight: {
      type: Number,
    },

    height: {
      type: Number,
    },

    age: {
      type: Number,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    activityLevel: {
      type: String,
      enum: ["low", "moderate", "active"],
    },

    // AI generated diet
    dietPlan: {
      type: String,
      required: true,
    },

    // optional: store which API used (Gemini 1 / Gemini 2)
    aiSource: {
      type: String,
      default: "gemini",
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

module.exports = mongoose.model("Diet", dietSchema);