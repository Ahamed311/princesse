# 🚀 Guide de Déploiement sur Vercel

## Préparation

Avant de déployer, assure-toi d'avoir :
- ✅ Personnalisé tous les textes
- ✅ Ajouté tes photos
- ✅ Changé la musique Spotify
- ✅ Testé le site en local (`npm run dev`)

## Étape 1 : Créer un repo GitHub

1. Va sur [github.com](https://github.com)
2. Clique sur "New repository"
3. Nomme-le (ex: "site-pour-elle")
4. Clique "Create repository"

## Étape 2 : Push ton code

Dans ton terminal (dans le dossier du projet) :

```bash
git init
git add .
git commit -m "Site premium pour elle ❤️"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git
git push -u origin main
```

## Étape 3 : Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Clique "Sign Up" et connecte-toi avec GitHub
3. Clique "Add New..." → "Project"
4. Sélectionne ton repo GitHub
5. Clique "Deploy"

⏱️ Attends 2-3 minutes...

## Étape 4 : Ton site est en ligne ! 🎉

Vercel te donnera une URL comme :
```
https://ton-site.vercel.app
```

Tu peux :
- Partager ce lien directement
- Acheter un nom de domaine personnalisé (optionnel)

## 🔄 Mettre à jour le site

Chaque fois que tu push sur GitHub, Vercel redéploie automatiquement :

```bash
git add .
git commit -m "Mise à jour"
git push
```

## 🌐 Ajouter un domaine personnalisé (Optionnel)

1. Achète un domaine (ex: sur Namecheap, OVH, etc.)
2. Dans Vercel, va dans Settings → Domains
3. Ajoute ton domaine
4. Suis les instructions pour configurer les DNS

## 📱 Tester sur mobile

Une fois déployé, teste le site sur ton téléphone pour vérifier que tout est parfait !

## 💡 Astuces

- Le site est automatiquement optimisé par Vercel
- Les images et vidéos sont servies rapidement
- Le site est responsive (mobile + desktop)
- HTTPS est activé automatiquement

---

🎯 **Prêt à impressionner !**
