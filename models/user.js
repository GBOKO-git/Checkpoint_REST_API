// Créer une personne avec ce prototype
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  sexe: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
