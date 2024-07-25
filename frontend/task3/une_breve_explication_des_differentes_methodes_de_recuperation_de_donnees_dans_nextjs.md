# Les Différentes Méthodes de Récupération de Données dans Next.js

## getServerSideProps

`getServerSideProps` est utilisé pour pré-rendre une page à chaque requête. Les données sont récupérées côté serveur à chaque fois qu'une requête est faite à cette page.

## getStaticProps

`getStaticProps` est utilisé pour pré-rendre des pages au moment de la compilation. Les pages générées sont statiques et peuvent être servies rapidement par un CDN.

## client-side data fetching

Le fetching côté client est utilisé lorsque les données doivent être récupérées après le rendu initial de la page. C'est utile pour les interactions dynamiques avec l'utilisateur.
