import {Link} from '@remix-run/react';
import styles from '../styles/home.css?url';

export const links = () => [{rel: 'stylesheet', href: styles}];

const productPath = '/products/pommeau-de-douche-filtrant';

export default function Home() {
  return (
    <main className="pf-site">
      <div className="pf-announcement">Livraison offerte dès 49€ <span>·</span> Paiement sécurisé <span>·</span> 30 jours pour changer d'avis</div>
      <header className="pf-header">
        <Link to="/" className="pf-logo">PURE<span>FLOW</span></Link>
        <nav className="pf-nav">
          <a href="#benefits">Pourquoi Pureflow</a>
          <a href="#how">Comment ça marche</a>
          <a href="#filters">Les filtres</a>
          <a href="#faq">FAQ</a>
        </nav>
        <Link to={productPath} className="pf-header-cta">Découvrir <span>→</span></Link>
      </header>

      <section className="pf-hero">
        <div className="pf-hero-copy">
          <div className="pf-kicker">LE NOUVEAU RITUEL DE DOUCHE</div>
          <h1>Une douche plus agréable, <em>sans changer vos habitudes.</em></h1>
          <p className="pf-hero-text">Un pommeau filtrant au design minimaliste, avec cartouche intégrée et bouton stop. Installez-le en quelques minutes et donnez une nouvelle dimension à votre routine.</p>
          <div className="pf-hero-actions">
            <Link to={productPath} className="pf-button pf-button-dark">Découvrir Pureflow <span>→</span></Link>
            <a href="#benefits" className="pf-underlink">Voir les détails</a>
          </div>
          <div className="pf-trust"><span>✓ Installation simple</span><span>✓ Filtre remplaçable</span><span>✓ Bouton stop intégré</span></div>
        </div>
        <div className="pf-hero-image"><div className="pf-image-orb"></div><img src="/images/product-hero.png" alt="Pommeau de douche filtrant Pureflow" /></div>
      </section>

      <section className="pf-proofbar"><div>EAU FILTRÉE</div><i>•</i><div>DESIGN MINIMAL</div><i>•</i><div>INSTALLATION RAPIDE</div><i>•</i><div>FILTRE REMPLAÇABLE</div></section>

      <section id="benefits" className="pf-benefits pf-container">
        <div className="pf-section-intro"><div className="pf-kicker">POURQUOI PUREFLOW</div><h2>Le détail qui change<br/><em>toute la douche.</em></h2><p>Nous avons imaginé un pommeau qui combine esthétique, filtration et simplicité d'utilisation — sans ajouter de complexité à votre salle de bain.</p></div>
        <div className="pf-benefit-grid">
          <article><span>01</span><h3>Filtration intégrée</h3><p>La cartouche se place directement dans le manche pour garder un ensemble compact et discret.</p></article>
          <article><span>02</span><h3>Un geste plus confortable</h3><p>La tête large diffuse l'eau de façon homogène pour une sensation agréable au quotidien.</p></article>
          <article><span>03</span><h3>Contrôle en un clic</h3><p>Le bouton stop permet de couper rapidement le débit pendant votre routine.</p></article>
        </div>
      </section>

      <section className="pf-editorial">
        <div className="pf-editorial-image"><img src="/images/lifestyle.jpg" alt="Pureflow dans une salle de bain lumineuse" /></div>
        <div className="pf-editorial-copy"><div className="pf-kicker">PENSÉ POUR VOTRE QUOTIDIEN</div><h2>Un objet utile qui peut aussi être <em>beau.</em></h2><p>Fini le produit purement fonctionnel caché dans la salle de bain. Pureflow assume une silhouette sobre et une finition pensée pour s'intégrer naturellement à votre intérieur.</p><Link to={productPath} className="pf-text-button">Voir le pommeau <span>↗</span></Link></div>
      </section>

      <section id="how" className="pf-how pf-container"><div className="pf-section-intro centered"><div className="pf-kicker">EN 3 ÉTAPES</div><h2>Installez. Filtrez. <em>Profitez.</em></h2></div><div className="pf-steps"><article><div className="pf-step-image"><img src="/images/product-hero.png" alt="Pommeau Pureflow" /></div><b>01</b><h3>Dévissez</h3><p>Retirez votre ancien pommeau de douche.</p></article><article><div className="pf-step-image"><img src="/images/product-detail.png" alt="Détail du pommeau Pureflow" /></div><b>02</b><h3>Vissez</h3><p>Installez Pureflow sur votre flexible standard.</p></article><article><div className="pf-step-image"><img src="/images/product-filters.jpg" alt="Cartouches de filtration Pureflow" /></div><b>03</b><h3>Remplacez</h3><p>Quand la cartouche arrive en fin d'utilisation, remplacez-la simplement.</p></article></div></section>

      <section id="filters" className="pf-filter-section"><div className="pf-filter-copy"><div className="pf-kicker">UNE CARTOUCHE, UNE ROUTINE SIMPLE</div><h2>Gardez votre pommeau. <em>Changez seulement le filtre.</em></h2><p>Le système est pensé pour éviter de remplacer tout le pommeau à chaque fois. Gardez votre installation et renouvelez la cartouche selon votre usage et les recommandations de votre modèle.</p><Link to={productPath} className="pf-button pf-button-dark">Découvrir le produit <span>→</span></Link></div><div className="pf-filter-image"><img src="/images/product-filters.jpg" alt="Cartouches de filtration" /></div></section>

      <section className="pf-product-banner"><div><div className="pf-kicker">VOTRE NOUVEL ESSENTIEL</div><h2>Une douche pensée<br/><em>jusqu'au moindre détail.</em></h2></div><Link to={productPath} className="pf-button pf-button-light">Je veux Pureflow <span>→</span></Link></section>

      <section id="faq" className="pf-faq pf-container"><div className="pf-section-intro"><div className="pf-kicker">QUESTIONS FRÉQUENTES</div><h2>Tout savoir avant<br/><em>de commander.</em></h2></div><div className="pf-faq-list"><details><summary>Est-il compatible avec ma douche ? <span>+</span></summary><p>Le pommeau utilise un raccord de douche standard. Vérifiez néanmoins le filetage de votre installation avant commande si vous avez un système particulier.</p></details><details><summary>Comment installer le pommeau ? <span>+</span></summary><p>Dévissez votre ancien pommeau puis vissez Pureflow sur le flexible. Aucun outil spécifique n'est normalement nécessaire.</p></details><details><summary>Quand faut-il changer la cartouche ? <span>+</span></summary><p>La durée dépend de la qualité de l'eau et de votre consommation. Utilisez les recommandations fournies avec votre cartouche pour déterminer le rythme adapté.</p></details><details><summary>Le filtre élimine-t-il tous les contaminants ? <span>+</span></summary><p>Non. Les performances dépendent du média filtrant et des caractéristiques de la cartouche. N'affichez sur votre boutique que les contaminants et performances effectivement testés et documentés pour votre produit.</p></details></div></section>

      <footer className="pf-footer"><div><Link to="/" className="pf-logo">PURE<span>FLOW</span></Link><p>Une routine plus simple. Une douche plus agréable.</p></div><div className="pf-footer-links"><a href="#benefits">Le produit</a><a href="#how">Installation</a><a href="#faq">FAQ</a><a href="#">Contact</a></div><small>© {new Date().getFullYear()} Pureflow. Tous droits réservés.</small></footer>
    </main>
  );
}
