# 📝 Guide de Personnalisation

## ✏️ Étape 1 : Modifier le prénom

Ouvre `app/components/HeroSection.tsx` et change la ligne 32 :

```tsx
<h1 className="...">
  [Son Prénom]  ← Remplace par son vrai prénom
</h1>
```

## 💬 Étape 2 : Personnaliser les messages

### Section "Ce que j'ai remarqué"
Fichier : `app/components/NoticeSection.tsx`

Modifie les 3 objets dans le tableau `notices` (lignes 7-21) :

```tsx
const notices = [
  {
    title: "Ton sourire",  ← Change le titre
    text: "Ton message personnalisé ici...",  ← Écris ce que tu penses vraiment
    video: "/video/videos1.mp4.mp4"
  },
  // ... 2 autres notices
];
```

### Message principal
Fichier : `app/components/MessageSection.tsx`

Modifie le tableau `paragraphs` (lignes 6-12) avec tes propres mots :

```tsx
const paragraphs = [
  "Ton premier paragraphe...",
  "Ton deuxième paragraphe...",
  // etc.
];
```

## 🖼️ Étape 3 : Ajouter tes photos

1. Place tes photos dans le dossier `public/` (ex: `public/photo1.jpg`)

2. Ouvre `app/components/GallerySection.tsx`

3. Remplace les divs de placeholder par des images :

```tsx
// Avant (ligne 25) :
<div className="w-full h-full bg-gradient-to-br...">
  <p>[Ajoute ta grande photo ici]</p>
</div>

// Après :
<Image
  src="/photo1.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

Fais pareil pour les 2 autres photos (lignes 35 et 47).

## 🎵 Étape 4 : Changer la musique

1. Va sur Spotify et trouve ta chanson
2. Clique sur "..." → "Partager" → "Intégrer le morceau"
3. Copie le code iframe
4. Ouvre `app/components/MusicSection.tsx`
5. Remplace l'iframe à la ligne 31 avec ton code

## 🎥 Étape 5 : Vérifier les vidéos

Tes vidéos sont déjà dans `public/video/` :
- videos1.mp4.mp4
- videos2.mp4.mp4
- videos3.mp4.mp4
- videos4.mp4.mp4

Elles sont automatiquement utilisées dans le site !

## 🎨 Étape 6 (Optionnel) : Changer les couleurs

Si tu veux modifier les couleurs, ouvre `app/globals.css` :

```css
:root {
  --warm-white: #FBF9F7;   ← Fond
  --bordeaux: #5E0F1B;      ← Couleur principale
  --champagne: #B08968;     ← Accent
}
```

## 🚀 Tester ton site

```bash
npm run dev
```

Ouvre http://localhost:3000 dans ton navigateur.

## 📤 Déployer sur Vercel

1. Crée un compte sur [vercel.com](https://vercel.com)
2. Push ton code sur GitHub
3. Sur Vercel, clique "New Project"
4. Importe ton repo GitHub
5. Clique "Deploy"
6. Ton site sera en ligne en 2 minutes !

---

💡 **Astuce** : Teste sur mobile après chaque modification pour vérifier que tout est responsive !
