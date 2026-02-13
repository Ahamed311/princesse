# 🎨 Guide d'Optimisation des Médias

## 📸 Photos

### Format recommandé
- **WebP** : Meilleure compression, supporté partout
- **AVIF** : Encore mieux, mais moins supporté
- **JPG** : Si tu n'as pas le choix

### Taille recommandée
- Grande photo : 1920x1080px max
- Petites photos : 800x600px max
- Poids : < 500KB par image

### Outils gratuits pour optimiser

**En ligne :**
- [TinyPNG](https://tinypng.com) - Compression automatique
- [Squoosh](https://squoosh.app) - Conversion WebP
- [Compressor.io](https://compressor.io) - Compression rapide

**Logiciels :**
- Photoshop : "Enregistrer pour le web"
- GIMP : Gratuit et puissant
- XnConvert : Conversion par lot

### Comment utiliser tes photos

1. Optimise tes photos avec un des outils ci-dessus
2. Renomme-les simplement : `photo1.jpg`, `photo2.jpg`, etc.
3. Place-les dans `public/`
4. Dans `GallerySection.tsx`, remplace :

```tsx
<Image
  src="/photo1.jpg"
  alt="Description"
  fill
  className="object-cover"
  priority  // Pour la première image seulement
/>
```

## 🎥 Vidéos

### Format recommandé
- **MP4 (H.264)** : Le plus compatible
- Résolution : 720p (1280x720) max
- Framerate : 30fps
- Poids : < 10MB par vidéo

### Outils pour compresser

**En ligne :**
- [Clideo](https://clideo.com/compress-video) - Simple et rapide
- [FreeConvert](https://www.freeconvert.com/video-compressor) - Gratuit

**Logiciels :**
- HandBrake (gratuit) - Le meilleur
- VLC - Peut aussi compresser
- FFmpeg - Pour les pros

### Paramètres HandBrake recommandés
```
Format: MP4
Codec: H.264
Résolution: 1280x720
Framerate: 30fps
Qualité: RF 23-25
```

### Tes vidéos actuelles

Tu as déjà 4 vidéos dans `public/video/` :
- videos1.mp4.mp4
- videos2.mp4.mp4
- videos3.mp4.mp4
- videos4.mp4.mp4

⚠️ **Note** : Elles ont `.mp4.mp4` - tu peux les renommer en `.mp4` seulement si tu veux.

## 🎵 Musique Spotify

### Avantages
✅ Pas de fichier à héberger
✅ Légal et officiel
✅ Lecteur intégré élégant
✅ Pas de problème de poids

### Comment changer la chanson

1. Ouvre Spotify (web ou app)
2. Trouve ta chanson
3. Clique sur "..." → "Partager" → "Intégrer le morceau"
4. Copie le code iframe
5. Colle-le dans `MusicSection.tsx`

### Alternative YouTube

Si tu préfères YouTube :

```tsx
<iframe
  width="100%"
  height="200"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-2xl"
></iframe>
```

## 📊 Vérifier les performances

Après déploiement, teste ton site sur :
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Objectif : Score > 90/100

## 💡 Astuces finales

1. **Moins c'est mieux** : Ne mets pas 50 photos
2. **Qualité > Quantité** : 3-4 belles photos valent mieux que 20 moyennes
3. **Teste sur mobile** : Les vidéos lourdes peuvent ralentir
4. **Lazy loading** : Déjà activé automatiquement par Next.js

---

🎯 **Résultat** : Un site rapide, fluide et professionnel !
