# Fonctionnalités Clés de Next.js

## Routage

Next.js utilise un système de routage basé sur les dossiers. Un itinéraire est un chemin unique de dossiers imbriqués, suivant la hiérarchie du système de fichiers depuis le dossier racine jusqu'à un dossier feuille final qui inclut un `page.js`. Les fichiers sont utilisés pour créer une interface utilisateur affichée pour un segment d'itinéraire. Cela simplifie la gestion des routes et permet de créer facilement des routes dynamiques.

## SSR (Server-Side Rendering)

Next.js prend en charge le rendu côté serveur (SSR), ce qui permet de générer des pages HTML dynamiques sur le serveur à chaque requête. Cela améliore les performances et le référencement (SEO) en fournissant des pages complètement rendues aux moteurs de recherche et aux utilisateurs avant que JavaScript ne soit chargé sur le client.

## API Routes

Les API routes offrent une solution pour construire une API publique avec Next.js. Tout fichier dans le dossier `pages/api` est mappé à `/api/*` et sera traité comme un point de terminaison API plutôt qu'une page. Ces fichiers sont des bundles uniquement côté serveur et n'augmenteront pas la taille de votre bundle côté client. Cela simplifie la création de fonctionnalités backend directement au sein de l'application Next.js sans impacter les performances du client.
