# Projet Fullstack ENSIM 2024

## Partie Back-end

### Lancement du projet

- Créez l'image Docker avec la commande suivante:
```
docker build -t pjl-back .
```

- Voir le README du Front-End pour le lancement


### Développement

- Prérequis: Avoir un mongodb qui tourne !
- Définir le fichier .env à la racine du projet sous la forme suivante:
```
APP_MONGO_URL=mongodb://localhost:27017/projet_back
APP_SECRET_KEY=secret
APP_JWT_SECRET=secret
APP_REGISTER_KEY=register
```
APP_SECRET_KEY est le secret pour le hashage de mot de passes

APP_JWT_SECRET est le secret pour la signature des json web tokens

APP_REGISTER_KEY vient être une clé d'authorisation pour enregistrer un nouvel utilisateur.

- Lancez les commandes suivante:
```
npm install -g pnpm
pnpm install
pnpm run dev
```