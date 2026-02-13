# 🚀 Mettre le Projet sur GitHub

## ✅ Étape 1 : Créer le Repo sur GitHub

1. Va sur [github.com](https://github.com)
2. Clique sur le bouton **"+"** en haut à droite
3. Sélectionne **"New repository"**
4. Remplis les informations :
   - **Repository name** : `site-pour-elle` (ou un autre nom)
   - **Description** : "Site premium pour une personne spéciale ❤️"
   - **Visibilité** : 
     - ✅ **Private** (recommandé - personne ne verra le code)
     - ⚠️ Public (tout le monde peut voir)
   - ❌ **NE COCHE PAS** "Add a README file"
   - ❌ **NE COCHE PAS** "Add .gitignore"
   - ❌ **NE COCHE PAS** "Choose a license"
5. Clique sur **"Create repository"**

## ✅ Étape 2 : Connecter ton Projet Local

GitHub va te montrer des commandes. Utilise celles-ci :

### Option 1 : HTTPS (Recommandé pour débutants)

```bash
git remote add origin https://github.com/TON-USERNAME/site-pour-elle.git
git branch -M main
git push -u origin main
```

### Option 2 : SSH (Si tu as configuré SSH)

```bash
git remote add origin git@github.com:TON-USERNAME/site-pour-elle.git
git branch -M main
git push -u origin main
```

## 📝 Commandes Détaillées

### 1. Ajouter le remote
```bash
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git
```
Remplace `TON-USERNAME` et `TON-REPO` par tes vraies valeurs !

### 2. Renommer la branche en main
```bash
git branch -M main
```

### 3. Push le code
```bash
git push -u origin main
```

Si GitHub demande tes identifiants :
- **Username** : Ton nom d'utilisateur GitHub
- **Password** : Utilise un **Personal Access Token** (pas ton mot de passe)

## 🔑 Créer un Personal Access Token (si nécessaire)

Si GitHub refuse ton mot de passe :

1. Va sur GitHub → Settings (ton profil)
2. Developer settings (en bas à gauche)
3. Personal access tokens → Tokens (classic)
4. Generate new token (classic)
5. Donne un nom : "Site pour elle"
6. Coche : **repo** (accès complet aux repos)
7. Generate token
8. **COPIE LE TOKEN** (tu ne le reverras plus !)
9. Utilise ce token comme mot de passe

## ✅ Vérification

Après le push, vérifie sur GitHub :
1. Va sur ton repo : `https://github.com/TON-USERNAME/TON-REPO`
2. Tu devrais voir tous tes fichiers
3. Les 13 fichiers .md de documentation
4. Le dossier app/ avec les composants
5. Le dossier public/ avec les vidéos

## 🔄 Mises à Jour Futures

Chaque fois que tu modifies le code :

```bash
git add .
git commit -m "Description de tes modifications"
git push
```

## 🚀 Prochaine Étape : Vercel

Une fois sur GitHub, tu peux déployer sur Vercel :

1. Va sur [vercel.com](https://vercel.com)
2. Sign up avec GitHub
3. Import ton repo
4. Deploy !

Voir **DEPLOIEMENT.md** pour les détails.

## 🆘 Problèmes Courants

### "Permission denied"
→ Utilise un Personal Access Token au lieu du mot de passe

### "Repository not found"
→ Vérifie l'URL du repo (copie-colle depuis GitHub)

### "Failed to push"
→ Vérifie que tu as bien créé le repo sur GitHub d'abord

### "Authentication failed"
→ Utilise un Personal Access Token

## 💡 Conseils

- Garde le repo **Private** si tu ne veux pas que d'autres voient le code
- Sauvegarde ton Personal Access Token dans un endroit sûr
- Ne partage jamais ton token publiquement
- Tu peux toujours changer de Private à Public plus tard

## 📋 Checklist

- [ ] Créer le repo sur GitHub
- [ ] Copier l'URL du repo
- [ ] `git remote add origin URL`
- [ ] `git branch -M main`
- [ ] `git push -u origin main`
- [ ] Vérifier sur GitHub que tout est là
- [ ] Passer à Vercel pour le déploiement

---

**Ton code est maintenant sauvegardé sur GitHub ! 🎉**

Prochaine étape : **DEPLOIEMENT.md** pour mettre le site en ligne.
