# ⚡ Guide Rapide - 5 Minutes pour Comprendre

## 🎯 Qu'est-ce que c'est ?

Un site web élégant et animé pour impressionner une personne spéciale.

## 🚀 Démarrage Ultra-Rapide

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## ✏️ Les 5 Fichiers à Modifier

### 1. Le Prénom
📁 `app/components/HeroSection.tsx` - Ligne 32
```tsx
<h1>[Son Prénom]</h1>  ← Change ici
```

### 2. Les 3 Qualités
📁 `app/components/NoticeSection.tsx` - Lignes 7-21
```tsx
{
  title: "Ton sourire",  ← Change ici
  text: "Ton message...",  ← Et ici
  video: "/video/videos1.mp4.mp4"
}
```

### 3. Le Message Principal
📁 `app/components/MessageSection.tsx` - Lignes 6-12
```tsx
const paragraphs = [
  "Ton premier paragraphe...",  ← Écris ici
  "Ton deuxième paragraphe...",  ← Et ici
  // etc.
];
```

### 4. Les Photos
📁 `app/components/GallerySection.tsx`
1. Mets tes photos dans `public/`
2. Remplace les `<div>` par `<Image src="/ta-photo.jpg" />`

### 5. La Musique
📁 `app/components/MusicSection.tsx` - Ligne 31
1. Va sur Spotify
2. Partager → Intégrer
3. Colle le code iframe

## 📱 Tester

```bash
npm run dev
```

Ouvre sur ton téléphone : http://TON-IP:3000

## 🚀 Déployer

```bash
git init
git add .
git commit -m "Site pour elle ❤️"
git push
```

Puis sur [vercel.com](https://vercel.com) : Import → Deploy

## 📚 Documentation Complète

Si tu veux plus de détails :

1. **START-HERE.md** - Commence ici
2. **CHECKLIST.md** - Liste complète
3. **PERSONNALISATION.md** - Guide détaillé
4. **DEPLOIEMENT.md** - Mise en ligne

## 🎨 Couleurs

Bordeaux : `#5E0F1B`
Champagne : `#B08968`
Fond : `#FBF9F7`

Change dans `app/globals.css` si besoin.

## ⚡ Commandes Essentielles

```bash
npm run dev      # Développement
npm run build    # Tester le build
```

## 🎯 Checklist Express

- [ ] Changer le prénom
- [ ] Écrire les 3 qualités
- [ ] Écrire le message
- [ ] Ajouter les photos
- [ ] Changer la musique
- [ ] Tester en local
- [ ] Déployer sur Vercel
- [ ] Partager ! ❤️

## 💡 Astuces

- Relis tout avant de partager
- Teste sur mobile
- Vérifie les fautes d'orthographe
- Choisis le bon moment pour partager

## 🆘 Problèmes Courants

**Le site ne se lance pas ?**
```bash
npm install
npm run dev
```

**Erreur de build ?**
```bash
npm run build
```
Lis les erreurs, elles indiquent quoi corriger.

**Les vidéos ne marchent pas ?**
Vérifie qu'elles sont bien dans `public/video/`

**Les photos ne s'affichent pas ?**
Vérifie le chemin : `/ta-photo.jpg` (avec le `/` au début)

## 🎉 C'est Tout !

Tu es prêt. Personnalise, teste, déploie, partage.

**Bonne chance ! 🚀❤️**
