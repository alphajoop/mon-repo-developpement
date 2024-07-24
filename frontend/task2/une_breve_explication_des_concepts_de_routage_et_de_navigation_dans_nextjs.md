# Concepts de Routage et de Navigation dans Next.js

## Routage

Next.js utilise un système de routage basé sur la structure des dossiers. Chaque dossier dans le répertoire `app` devient automatiquement une route de l'application. Par exemple, un dossiers `about` dans `app` sera accessible via `/about`. Les dossiers peuvent contenir des fichiers et d'autres sous-dossiers pour créer des routes imbriquées et dynamiques. Un fichier nommé `[productId]` dans un dossier peut correspondre à une route dynamique comme `/product/123`, où `123` est un paramètre de route.

## Navigation

Next.js simplifie la navigation entre les pages avec le composant `Link`. Le composant `Link` permet de créer des liens entre les pages sans recharger la page entière, offrant une expérience utilisateur plus fluide. Par exemple :

```jsx
import Link from 'next/link';

<Link href="/about">
  <a>About</a>
</Link>
