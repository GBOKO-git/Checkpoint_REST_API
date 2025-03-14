// Le fichier principal pour démarrer votre serveur Express
//import des variable environnement
require("dotenv").config();

// modules necessaires
const express = require("express");
const app = express();
const User = require("./models/user");
const mongoDBConnection = require("./config/db");

// Middleware pour parser le corps de la requête en JSON
app.use(express.json());

// Connexion à la base de données MongoDB
mongoDBConnection();

// GET : RETOURNER TOUS LES UTILISATEURS
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST : AJOUTER UN NOUVEAU UTILISATEUR À LA BASE DE DONNÉES
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT : ÉDITER UN UTILISATEUR PAR ID
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE : SUPPRIMER UN UTILISATEUR PAR ID
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
