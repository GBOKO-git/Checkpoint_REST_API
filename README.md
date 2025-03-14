Instructions

Démarrer un nouveau projet Node JS avec npm init.
Installer Mongoose, Express et .env.
Configurer les variables d'environnement avec .env.
Lancer un serveur avec Express dans le fichier server.js.
Connecter votre base de données localement ou avec Mongo Atlas.
La structure des dossiers devrait être comme ceci :

Copier

config/ .env server.js

Créer un dossier models et un fichier User.js à l'intérieur.
Dans User.js, définir un schéma Mongoose et exporter le modèle. Vous l'utiliserez dans server.js.
La structure des dossiers devrait être comme ceci :

Copier

config/ .env models/User.js server.js

Dans server.js, créer quatre routes :
GET : RETOURNER TOUS LES UTILISATEURS
POST : AJOUTER UN NOUVEAU UTILISATEUR À LA BASE DE DONNÉES
PUT : ÉDITER UN UTILISATEUR PAR ID
DELETE : SUPPRIMER UN UTILISATEUR PAR ID
Utiliser Postman pour tester chaque route.
