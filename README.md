# SIMBA — site web

Site vitrine public pour SIMBA, plateforme mobile de commerce local au Cameroun. Ce site présente le projet, son fonctionnement et sa vision ; il ne reproduit pas l'application mobile et n'implémente aucune fonctionnalité transactionnelle (pas de paiement, pas de panier, pas de compte).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, React 19, TypeScript)
- Tailwind CSS v4 (jetons de design dans `src/app/globals.css`)
- Aucune dépendance d'animation ou de composants tierce : tout est en React + CSS natif pour rester léger sur les connexions 3G.

## Démarrer

```sh
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Configuration

Toutes les valeurs encore inconnues (URL du site, URL de l'application, destination du formulaire de contact) sont centralisées et lues depuis l'environnement. Copier `.env.example` vers `.env.local` et renseigner les valeurs au fur et à mesure qu'elles sont confirmées :

```sh
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` — domaine public du site, utilisé pour l'URL canonique et le sitemap.
- `NEXT_PUBLIC_APP_URL` — destination des boutons « Explorer SIMBA ». Tant qu'elle n'est pas définie, ces boutons renvoient vers la section de contact de la page (jamais un lien mort).
- `NEXT_PUBLIC_CONTACT_ENDPOINT` — endpoint HTTPS qui reçoit les soumissions du formulaire de contact en JSON. Tant qu'il n'est pas défini, le formulaire valide la saisie mais informe honnêtement que l'envoi n'est pas encore relié à un service (jamais de faux message de succès).

Les coordonnées de contact vérifiées (e-mail, téléphone, réseaux sociaux) et les pages légales se renseignent dans `src/config/site.ts`.

## Vérité produit

`src/config/features.ts` contient la matrice des fonctionnalités (disponible / en développement / prévu / à confirmer), avec la preuve qui justifie chaque statut (code de l'application mobile dans `../dev`, serveur de paiement dans `../dev/server`, ou spécifications dans le dossier parent `SIMBA`). Chaque affirmation produit sur le site s'appuie sur cette matrice via le composant `FeatureBadge`. Avant de faire passer une fonctionnalité en « disponible », vérifier qu'elle fonctionne réellement en production et mettre à jour la preuve.

## Structure

```
src/
  app/            Route racine (layout, page, SEO : robots, sitemap, icône)
  components/
    layout/        En-tête, pied de page
    ui/            Boutons, titres de section, badges, icônes — primitives réutilisables
    home/           Sections de la page d'accueil (une par section du brief)
  config/          Configuration centralisée (site, fonctionnalités)
  content/          Textes de la page (fr.ts). Une version en.ts pourra être ajoutée sur le même modèle.
  lib/              Petits utilitaires partagés (classes CSS, liens)
```

## Notes d'implémentation

- Logo : extrait de `simba brandbook.pdf` / `touchedLogo.png` dans le dossier parent `SIMBA/`, copié dans `public/brand/simba-logo.png` et recadré pour l'icône du site (`src/app/icon.png`).
- Palette : bleu marine et vert accent repris du brandbook et de la palette déjà utilisée dans l'application mobile (`../dev/src/theme/colors.js`), centralisés comme jetons Tailwind dans `globals.css`.
- Aucune capture d'écran réelle de l'application n'était disponible dans le dépôt ; la maquette du héros (`PhoneMockup.tsx`) est une illustration originale construite à partir d'informations vérifiées (produits, statut de commande, paiement Mobile Money), explicitement présentée comme telle dans l'interface.
- Les logos Orange Money / MTN MoMo ne sont pas reproduits (droits de marque) ; ils sont mentionnés par leur nom, comme dans les spécifications produit.
