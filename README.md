# PUREFLOW — Hydrogen V2

Version 2: storefront premium/minimaliste, responsive, avec homepage, page produit Shopify, galerie, FAQ, sections conversion et panier.

## Installation

1. Crée un projet Hydrogen officiel :
```bash
npm create @shopify/hydrogen@latest
```

2. Dans ton projet généré, remplace/ajoute :
- `app/routes/_index.tsx`
- `app/routes/products.$productHandle.tsx`
- `app/styles/home.css`
- `app/styles/product.css`
- `public/images/*`

3. Connecte ton projet à ta boutique :
```bash
npx shopify hydrogen link
npx shopify hydrogen env pull
```

4. Lance l'aperçu local :
```bash
shopify hydrogen dev
```
Puis ouvre `http://localhost:3000`.

5. Pour mettre le site en ligne sur Oxygen :
```bash
npx shopify hydrogen deploy
```

## Important
Le produit doit avoir le handle `pommeau-de-douche-filtrant`, ou tu dois modifier le lien `productPath` de la homepage. Les affirmations de filtration, certifications, performances, avis et résultats doivent être remplacées par des informations vérifiables concernant ton produit.
