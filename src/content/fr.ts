/**
 * Page copy (French, default language).
 *
 * Structured so an English version can be added later as `en.ts` with the same
 * shape. Product claims must match `src/config/features.ts`.
 */
import type { FeatureKey } from '@/config/features'

export const nav = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Aperçu', href: '#apercu' },
  { label: 'Pour les vendeurs', href: '#vendeurs' },
  { label: 'Pour les acheteurs', href: '#acheteurs' },
  { label: 'Comment ça marche', href: '#fonctionnement' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const ui = {
  skipToContent: 'Aller au contenu',
  exploreApp: 'Télécharger l’application',
  openMenu: 'Ouvrir le menu',
  closeMenu: 'Fermer le menu',
  menuLabel: 'Menu principal',
  mainNavLabel: 'Navigation principale',
  realScreenshotNote: 'Capture d’écran réelle de l’application SIMBA.',
  footerNavLabel: 'Navigation du pied de page',
  appStoreLine1: 'Télécharger sur',
  appStoreLine2: 'App Store',
  playStoreLine1: 'Disponible sur',
  playStoreLine2: 'Google Play',
}

export const hero = {
  eyebrow: 'L’avenir du commerce local',
  // Rendered as two visually distinct lines in the hero (see Hero.tsx); kept
  // as separate strings rather than split at render time so the line break
  // is a deliberate content choice, not a text-processing guess.
  headlineLines: ['Achetez en confiance.', 'Vendez avec SIMBA.'] as const,
  body:
    'SIMBA aide les commerçants du Cameroun à présenter leurs produits en ligne, à mieux suivre leurs commandes et à gagner la confiance de leurs clients.',
  secondaryCta: 'Découvrir le fonctionnement',
  note: 'Conçu pour le téléphone, les réseaux sociaux et le Mobile Money.',
}

export const value = {
  id: 'a-propos',
  eyebrow: 'À propos de SIMBA',
  heading: 'Le commerce en ligne, rendu plus simple pour tout le monde.',
  lead:
    'Au Cameroun, beaucoup de ventes en ligne passent par WhatsApp, Facebook et Instagram. Les commandes s’y perdent et les paiements se vérifient à la main. SIMBA organise ce commerce, sans changer vos habitudes.',
  points: [
    {
      icon: 'storefront',
      title: 'Une vitrine plus professionnelle',
      text: 'Présentez vos produits dans une boutique organisée, avec des liens faciles à partager.',
      feature: 'sellerShop' as FeatureKey,
    },
    {
      icon: 'orders',
      title: 'Une gestion des commandes plus claire',
      text: 'Retrouvez les commandes, leur statut et les informations de vos clients au même endroit.',
      feature: 'orderDashboard' as FeatureKey,
    },
    {
      icon: 'shield',
      title: 'Plus de confiance à chaque transaction',
      text: 'Un paiement structuré autour de la remise du produit, confirmé par un code.',
      feature: 'deliveryCodeConfirmation' as FeatureKey,
    },
    {
      icon: 'phone',
      title: 'Pensé pour les réalités locales',
      text: 'Une interface mobile, des images légères pour les connexions instables, et une remise adaptée aux quartiers où l’adresse de rue ne suffit pas.',
      feature: null,
    },
  ],
}

export const showcase = {
  id: 'apercu',
  eyebrow: 'Dans l’application',
  heading: 'Un aperçu de l’interface, écran par écran.',
  lead: 'Quatre captures d’écran réelles de l’application SIMBA : le catalogue, la commande, le paiement et ce qui arrive ensuite.',
  tabs: [
    {
      key: 'catalogue',
      label: 'Catalogue',
      title: 'Un catalogue organisé',
      text: 'Les produits sont classés par catégorie, avec photo, note et prix, prêts à être découverts ou partagés.',
      feature: 'sellerShop' as FeatureKey,
      icon: 'storefront' as const,
      image: '/phone-mockups/products.webp',
      imageAlt: 'Catalogue de produits de l’application SIMBA, classés par catégorie',
    },
    {
      key: 'commande',
      label: 'Commande',
      title: 'Un parcours de commande guidé',
      text: 'Produit, paiement, confirmation puis suivi : quatre étapes claires, affichées à chaque instant de la commande.',
      feature: 'mobileMoneyCollection' as FeatureKey,
      icon: 'orders' as const,
      image: '/phone-mockups/product-details.webp',
      imageAlt: 'Écran de commande de l’application SIMBA, étape 1 sur 4 : Produit',
    },
    {
      key: 'paiement',
      label: 'Paiement',
      title: 'Un paiement Mobile Money',
      text: 'L’acheteur confirme la demande de paiement directement depuis son téléphone, Orange Money ou MTN MoMo.',
      feature: 'mobileMoneyCollection' as FeatureKey,
      operators: true,
      icon: 'phone' as const,
      image: '/phone-mockups/checkout.webp',
      imageAlt: 'Écran de paiement de l’application SIMBA avec détection de l’opérateur Mobile Money',
    },
    {
      key: 'direct',
      label: 'Vente en direct',
      title: 'Bientôt : la vente en direct',
      text: 'Une fonctionnalité à venir, déjà annoncée dans l’application : présenter et vendre des produits en vidéo, en direct.',
      feature: 'shortVideos' as FeatureKey,
      icon: 'phone' as const,
      image: '/phone-mockups/live-sales.webp',
      imageAlt: 'Écran « Vente en vidéo et en direct » de l’application SIMBA, marqué bientôt disponible',
    },
  ],
}

export const vision = {
  id: 'vision',
  eyebrow: 'Vision',
  heading: 'Conçu pour le Cameroun. Pensé pour grandir avec le commerce africain.',
  lead:
    'SIMBA part du commerce local tel qu’il se pratique aujourd’hui. L’objectif : organiser ces échanges, renforcer la confiance entre acheteurs et vendeurs, et rendre la présence en ligne accessible aux petits commerçants. Le projet commence au Cameroun. Il pourra ensuite s’étendre à d’autres marchés africains, avec des versions adaptées à chaque pays.',
  principles: [
    'Soutenir les commerçants indépendants dans leur activité quotidienne.',
    'Aider les petites entreprises à construire une présence numérique propre.',
    'Relier le commerce sur les réseaux sociaux à des outils structurés.',
    'Développer le produit par étapes, à partir des usages réels.',
  ],
}

export const sellers = {
  id: 'vendeurs',
  eyebrow: 'Pour les vendeurs',
  heading: 'Votre commerce mérite mieux qu’une boîte de messages.',
  lead:
    'SIMBA vous aide à professionnaliser votre activité sans quitter les communautés que vous avez déjà construites. Vos clients continuent de vous trouver sur vos réseaux ; SIMBA organise ce qui se passe ensuite.',
  benefits: [
    {
      title: 'Une boutique à votre nom',
      outcome: 'Vos clients voient vos produits clairement, sans fouiller dans vos publications.',
      feature: 'sellerShop' as FeatureKey,
    },
    {
      title: 'Des produits prêts à vendre',
      outcome: 'Ajoutez photos, description et prix, et gardez votre catalogue à jour en quelques gestes.',
      feature: 'productPublishing' as FeatureKey,
    },
    {
      title: 'Des liens à partager partout',
      outcome: 'Chaque produit obtient un lien à envoyer dans un statut WhatsApp, un groupe ou un message privé.',
      feature: 'shareableProductLinks' as FeatureKey,
    },
    {
      title: 'Toutes les commandes au même endroit',
      outcome: 'Vous savez qui a commandé quoi, ce qui est payé, ce qui est prêt et ce qui reste à remettre.',
      feature: 'orderDashboard' as FeatureKey,
    },
    {
      title: 'Un suivi pour chaque client',
      outcome: 'Chaque changement de statut informe votre client, sans relance manuelle de votre part.',
      feature: 'smsNotifications' as FeatureKey,
    },
    {
      title: 'L’historique de vos ventes',
      outcome: 'Retrouvez vos clients fidèles et vos produits qui se vendent, pour mieux décider.',
      feature: 'salesAnalytics' as FeatureKey,
    },
  ],
  cta: 'Rejoindre SIMBA comme vendeur',
  ctaNote: 'L’inscription vendeur est validée par l’équipe SIMBA avant la mise en ligne de votre boutique.',
}

export const buyers = {
  id: 'acheteurs',
  eyebrow: 'Pour les acheteurs',
  heading: 'Achetez en toute confiance.',
  lead:
    'Vous recevez un lien, vous consultez le produit, vous payez depuis votre téléphone. SIMBA veut rendre chaque étape claire, du premier clic jusqu’à la réception.',
  journey: [
    {
      title: 'Découvrez le produit',
      text: 'Ouvrez le lien partagé par le vendeur ou sa boutique.',
      feature: 'shareableProductLinks' as FeatureKey,
      icon: 'link' as const,
    },
    {
      title: 'Vérifiez les détails',
      text: 'Consultez le prix, la description, les photos et les avis du vendeur.',
      feature: 'buyerReviews' as FeatureKey,
      icon: 'check' as const,
    },
    {
      title: 'Commandez sans créer de compte',
      text: 'Renseignez votre numéro de téléphone pour recevoir vos confirmations.',
      feature: null,
      icon: 'arrow-right' as const,
    },
    {
      title: 'Payez par Mobile Money',
      text: 'Confirmez la demande de paiement sur votre téléphone, avec Orange Money ou MTN MoMo.',
      feature: 'mobileMoneyCollection' as FeatureKey,
      operators: true,
      icon: 'phone' as const,
    },
    {
      title: 'Recevez et confirmez',
      text: 'Suivez les mises à jour de votre commande et confirmez la remise avec votre code.',
      feature: 'deliveryCodeConfirmation' as FeatureKey,
      icon: 'shield' as const,
    },
  ],
  cta: 'Découvrir SIMBA',
}

export const howItWorks = {
  id: 'fonctionnement',
  eyebrow: 'Comment ça marche',
  heading: 'Un parcours simple, de la boutique à la remise.',
  lead:
    'Les étapes ci-dessous décrivent la conception visée. Certaines fonctions ne sont pas encore disponibles pour tous.',
  seller: {
    title: 'Côté vendeur',
    steps: [
      { title: 'Créez votre boutique', text: 'Inscrivez-vous, puis attendez la validation de votre compte.', feature: 'sellerApproval' as FeatureKey },
      { title: 'Publiez vos produits', text: 'Ajoutez les photos, le prix et la description de chaque article.', feature: 'productPublishing' as FeatureKey },
      { title: 'Partagez vos liens', text: 'Envoyez le lien d’un produit à vos clients, où qu’ils se trouvent.', feature: 'shareableProductLinks' as FeatureKey },
      { title: 'Gérez vos commandes', text: 'Suivez chaque commande et faites-la avancer d’un geste.', feature: 'orderDashboard' as FeatureKey },
      { title: 'Organisez la remise', text: 'Remettez le produit au client et faites valider le code de remise.', feature: 'deliveryCodeConfirmation' as FeatureKey },
    ],
  },
  buyer: {
    title: 'Côté acheteur',
    steps: [
      { title: 'Ouvrez le lien', text: 'Accédez à la page produit en un clic.', feature: 'shareableProductLinks' as FeatureKey },
      { title: 'Vérifiez et commandez', text: 'Consultez les détails, puis indiquez votre numéro de téléphone.', feature: null },
      { title: 'Payez', text: 'Validez le paiement Mobile Money sur votre téléphone.', feature: 'mobileMoneyCollection' as FeatureKey },
      { title: 'Recevez', text: 'Donnez votre code au moment de la remise, et c’est terminé.', feature: 'deliveryCodeConfirmation' as FeatureKey },
    ],
  },
}

export const payments = {
  id: 'securite',
  eyebrow: 'Paiements et confiance',
  heading: 'Une confiance construite à chaque transaction.',
  lead:
    'Aujourd’hui, beaucoup de commerçants vérifient leurs paiements à la main : une capture d’écran, un message, une attente. Le risque pèse des deux côtés. L’acheteur hésite à payer avant d’avoir reçu son produit, et le vendeur hésite à préparer une commande dont il n’est pas sûr d’être payé.',
  flowTitle: 'Le principe visé',
  flow: [
    {
      title: 'Paiement',
      text: 'L’acheteur paie par Mobile Money, via un prestataire de paiement agréé.',
      feature: 'mobileMoneyCollection' as FeatureKey,
      operators: true,
    },
    {
      title: 'Fonds séquestrés',
      text: 'Le montant est retenu jusqu’à la remise du produit. Le vendeur sait que la commande est payée.',
      feature: 'escrowHolding' as FeatureKey,
    },
    {
      title: 'Code de remise',
      text: 'L’acheteur présente son code au moment de recevoir le produit.',
      feature: 'deliveryCodeConfirmation' as FeatureKey,
    },
    {
      title: 'Versement au vendeur',
      text: 'Après validation du code, les fonds sont versés au vendeur. Au lancement, cette libération est vérifiée par l’équipe.',
      feature: 'manualFundsRelease' as FeatureKey,
    },
  ],
  notice: {
    title: 'Ce qui n’est pas encore en service',
    text: 'Le mécanisme ci-dessus décrit l’approche visée. Les paiements Orange Money et MTN MoMo sont en cours d’intégration, et le séquestre des fonds n’est pas encore en service. SIMBA ne propose donc pas, à ce stade, de garantie de remboursement ou de protection acheteur. Les conditions précises seront communiquées avant l’ouverture de chaque service.',
  },
}

export const faq = {
  id: 'faq',
  eyebrow: 'Questions fréquentes',
  heading: 'Vos questions, nos réponses.',
  lead: 'Les réponses reflètent l’état d’avancement actuel. Pour une information précise, contactez l’équipe.',
  items: [
    {
      question: 'Qu’est-ce que SIMBA ?',
      answer:
        'SIMBA est une plateforme mobile qui aide les commerçants à présenter leurs produits, à gérer leurs commandes et à organiser le paiement avec leurs clients au Cameroun. Elle s’appuie sur les canaux que vous utilisez déjà.',
    },
    {
      question: 'Qui peut utiliser SIMBA ?',
      answer:
        'Les vendeurs, après validation de leur compte par l’équipe SIMBA, et les acheteurs, qui peuvent commander à partir d’un lien produit. Les modalités d’accès sont confirmées avant chaque ouverture.',
    },
    {
      question: 'SIMBA est-elle adaptée aux petites entreprises ?',
      answer:
        'Oui. Les commerçants indépendants qui vendent déjà sur les réseaux sociaux sont au cœur du projet, et l’outil est conçu pour eux.',
    },
    {
      question: 'Comment présenter mes produits sur SIMBA ?',
      answer:
        'Vous créez votre boutique, puis vous ajoutez vos produits avec leurs photos, leur prix et leur description. Ces fonctions ne sont pas encore ouvertes à tous.',
    },
    {
      question: 'Puis-je partager mes liens SIMBA sur WhatsApp ?',
      answer:
        'Le partage de liens produits est prévu. Chaque produit aura un lien que vous pourrez envoyer sur WhatsApp, Facebook ou tout autre canal. Cette fonction n’est pas encore disponible.',
    },
    {
      question: 'Quels moyens de paiement sont prévus ?',
      answer:
        'Le paiement par Orange Money et MTN MoMo est en cours d’intégration. La disponibilité exacte sera précisée lors de l’ouverture du service.',
    },
    {
      question: 'Comment la sécurité des transactions est-elle assurée ?',
      answer:
        'Le principe est de retenir les fonds jusqu’à la remise confirmée par un code. Ce mécanisme n’est pas encore en service, et SIMBA ne promet donc aucune garantie à ce stade. Consultez la section « Paiements et confiance ».',
    },
    {
      question: 'Comment rejoindre SIMBA ou en savoir plus ?',
      answer:
        'Utilisez le formulaire de contact en bas de cette page en précisant si vous êtes vendeur, acheteur ou partenaire. L’équipe vous répondra à partir des coordonnées que vous indiquez.',
    },
    {
      question: 'SIMBA applique-t-elle des frais ?',
      answer:
        'Les conditions tarifaires ne sont pas encore publiées. Elles seront communiquées aux vendeurs avant leur ouverture. Pour toute question, contactez l’équipe.',
    },
  ],
}

export const contact = {
  id: 'contact',
  eyebrow: 'Contact',
  heading: 'Construisons ensemble un commerce local plus fluide.',
  lead:
    'Vous vendez en ligne, vous voulez découvrir SIMBA, ou vous souhaitez devenir partenaire ? Écrivez-nous.',
  paths: [
    { title: 'Vendeurs', text: 'Vous voulez rejoindre SIMBA et présenter votre activité.', icon: 'storefront' as const },
    { title: 'Acheteurs', text: 'Vous voulez en savoir plus sur la commande et le paiement.', icon: 'users' as const },
    {
      title: 'Partenaires',
      text: 'Vous représentez une entreprise ou un acteur financier intéressé par SIMBA.',
      icon: 'link' as const,
    },
    { title: 'Questions générales', text: 'Pour toute autre demande, écrivez-nous simplement.', icon: 'chat' as const },
  ],
  form: {
    profileLabel: 'Vous êtes',
    profiles: [
      { value: 'vendeur', label: 'Vendeur' },
      { value: 'acheteur', label: 'Acheteur' },
      { value: 'partenaire', label: 'Partenaire (commerce, paiement, autre)' },
      { value: 'autre', label: 'Autre demande' },
    ],
    nameLabel: 'Nom complet',
    contactLabel: 'Téléphone ou e-mail',
    contactHelp: 'Indiquez un moyen de vous répondre.',
    messageLabel: 'Votre message',
    submit: 'Envoyer le message',
    sending: 'Envoi en cours…',
    success: 'Merci. Votre message a bien été envoyé, l’équipe vous répondra prochainement.',
    errors: {
      name: 'Indiquez votre nom complet (2 caractères minimum).',
      contact: 'Indiquez un numéro de téléphone ou une adresse e-mail valide.',
      message: 'Votre message doit contenir au moins 10 caractères.',
      network: 'Envoi impossible pour le moment. Vérifiez votre connexion et réessayez.',
      server: 'Le message n’a pas pu être enregistré. Réessayez dans quelques instants.',
    },
    notConfigured:
      'Le formulaire est prêt, mais son service d’envoi n’est pas encore relié à ce site. Votre message n’a pas été transmis.',
  },
  directContact: 'Coordonnées directes à venir.',
}

export const footer = {
  missionLabel: 'Notre mission',
  navTitle: 'Navigation',
  contactTitle: 'Contact',
  contactFallback: 'Utilisez le formulaire de contact de cette page.',
  legalTitle: 'Informations légales',
  privacy: 'Politique de confidentialité',
  terms: 'Conditions d’utilisation',
  rights: 'Tous droits réservés.',
}
