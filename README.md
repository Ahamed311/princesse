# 💝 Site Premium "Pour Toi"

Un site élégant et immersif créé avec Next.js, Tailwind CSS et Framer Motion.

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

**Nouveau ?** Commence par lire **START-HERE.md** ou **INDEX-DOCUMENTATION.md**

Tous les guides disponibles :
- **START-HERE.md** ⭐ - Point de départ
- **GUIDE-RAPIDE.md** ⚡ - Version express (5 min)
- **CHECKLIST.md** ✅ - Liste de vérification
- **PERSONNALISATION.md** ✏️ - Personnaliser le contenu
- **EXEMPLES-TEXTES.md** 💬 - Exemples de messages
- **OPTIMISATION-MEDIAS.md** 🎨 - Optimiser photos/vidéos
- **DEPLOIEMENT.md** 🚀 - Mettre en ligne
- **CONSEILS-FINAUX.md** 💝 - Avant de partager
- **RESUME-TECHNIQUE.md** 🔧 - Détails techniques
- **PROJET-COMPLET.md** 📋 - Vue d'ensemble
- **INDEX-DOCUMENTATION.md** 📖 - Index complet

## 🎨 Personnalisation Rapide

### 1. Modifier le prénom
`app/components/HeroSection.tsx` - ligne 32

### 2. Personnaliser les messages
- `app/components/NoticeSection.tsx` - Les 3 qualités
- `app/components/MessageSection.tsx` - Le message principal

### 3. Ajouter tes photos
`app/components/GallerySection.tsx` + place tes photos dans `public/`

### 4. Changer la musique
`app/components/MusicSection.tsx` - Embed Spotify

## 🎯 Stack Technique

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Playfair Display + Inter** - Typographie

## 🎨 Couleurs du Thème

```css
Fond chaud : #FBF9F7
Bordeaux : #5E0F1B
Champagne : #B08968
```

## 📦 Déployer sur Vercel

1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Importe ton repo
4. Déploie automatiquement !

Voir **DEPLOIEMENT.md** pour le guide complet.

## 🎯 Fonctionnalités

✅ Design premium et élégant
✅ Animations fluides (Framer Motion)
✅ Responsive mobile + desktop
✅ Barre de progression au scroll
✅ Effet machine à écrire
✅ Galerie photos avec hover effects
✅ Vidéos intégrées
✅ Lecteur Spotify
✅ Optimisé pour la performance

## 📱 Responsive

Le site est parfaitement adapté à tous les écrans :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Commandes

```bash
npm run dev      # Développement (port 3000)
npm run build    # Build production
npm run start    # Serveur production local
npm run lint     # Linter ESLint
```

## 📂 Structure

```
app/
├── components/          Tous les composants
│   ├── HeroSection.tsx
│   ├── NoticeSection.tsx
│   ├── MessageSection.tsx
│   ├── GallerySection.tsx
│   ├── MusicSection.tsx
│   ├── Footer.tsx
│   └── ScrollIndicator.tsx
├── page.tsx            Page principale
├── layout.tsx          Layout global
└── globals.css         Styles globaux
```

## 💡 Besoin d'Aide ?

Consulte **INDEX-DOCUMENTATION.md** pour trouver le guide dont tu as besoin.

---

Fait avec ❤️ et Next.js
