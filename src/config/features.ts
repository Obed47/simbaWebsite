/**
 * Feature-status matrix.
 *
 * Every product claim on the website is driven by this file. Before changing a
 * status to "live", confirm the behaviour in the running application and in
 * the project's authoritative documentation, and record the evidence here.
 *
 * Statuses:
 * - "live":            verified as operational.
 * - "in-development":  implemented in the app code or prototype, but not verified as operating in production.
 * - "planned":         described in the specifications as a future phase, not yet built.
 * - "unknown":         insufficient evidence. Never presented as available.
 *
 * Evidence references point to the mobile app (`dev/`), the payments server
 * (`dev/server/`) and the product specifications (`SIMBA_Specifications_v2.md`,
 * `SIMBA_Specifications_v3_addendum.md`) in the parent SIMBA folder.
 */

export type FeatureStatus = 'live' | 'in-development' | 'planned' | 'unknown'

export interface Feature {
  label: string
  status: FeatureStatus
  evidence: string
}

export const features = {
  sellerShop: {
    label: 'Mini-boutique vendeur',
    status: 'in-development',
    evidence:
      'Écrans vendeur dans dev/src/screens/seller (prototype, données de démonstration) ; confirmé par capture d’écran réelle de l’app (public/phone-mockups/products.webp, homepage.jpeg).',
  },
  productPublishing: {
    label: 'Ajout de produits avec photos, prix et description',
    status: 'in-development',
    evidence: 'ProductFormScreen.jsx (formulaire local, pas de persistance serveur).',
  },
  orderDashboard: {
    label: 'Tableau de bord des commandes et statuts',
    status: 'in-development',
    evidence: 'SellerDashboardScreen.jsx (statuts gérés en état local).',
  },
  sellerApproval: {
    label: 'Validation des vendeurs par l’administrateur',
    status: 'in-development',
    evidence:
      'AdminScreen.jsx et SellerOnboardingScreen.jsx (interface seulement) ; confirmé par capture d’écran réelle de l’app (public/phone-mockups/seller.webp), affichant « En attente de validation ».',
  },
  mobileMoneyCollection: {
    label: 'Paiement Orange Money et MTN MoMo',
    status: 'in-development',
    evidence:
      'CheckoutScreen.jsx + dev/server (CamPay, configuré pour l’environnement de démonstration DEV). Pas encore vérifié en production. Confirmé par capture d’écran réelle de l’app (public/phone-mockups/checkout.webp), détection d’opérateur MTN MoMo visible.',
  },
  paymentStatusPolling: {
    label: 'Vérification du statut de paiement',
    status: 'in-development',
    evidence: 'App.jsx interroge /api/checkout/:reference/status.',
  },
  deliveryCodeConfirmation: {
    label: 'Confirmation de remise par code',
    status: 'in-development',
    evidence:
      'Code généré et vérifié côté client (App.jsx, SellerDashboardScreen.jsx). Aucune génération ni vérification serveur.',
  },
  escrowHolding: {
    label: 'Fonds bloqués jusqu’à la remise (séquestre)',
    status: 'planned',
    evidence:
      'Spec v2 §6 : prestataire de paiement agréé à confirmer en Phase 0. L’écran admin « Libérer » est une maquette.',
  },
  manualFundsRelease: {
    label: 'Libération manuelle des fonds par l’équipe',
    status: 'planned',
    evidence: 'Spec v2 §5.4 et §4 étape 7 (MVP, semi-manuel).',
  },
  automatedFundsRelease: {
    label: 'Libération automatique des fonds',
    status: 'planned',
    evidence: 'Spec v2 §4 étape 7 : prévue après une période de confiance.',
  },
  shareableProductLinks: {
    label: 'Liens produits partageables (WhatsApp, Facebook, etc.)',
    status: 'planned',
    evidence: 'Spec v2 §5.1 et §4 étape 1. Aucune fonction de partage trouvée dans le code.',
  },
  smsNotifications: {
    label: 'Notifications SMS à chaque étape de commande',
    status: 'planned',
    evidence: 'Spec v2 §5.1 et §7 (passerelle SMS). Aucune intégration trouvée dans le code.',
  },
  accountAfterPayment: {
    label: 'Création de compte après paiement',
    status: 'planned',
    evidence: 'Spec v2 §5.2 (écran post-paiement).',
  },
  buyerReviews: {
    label: 'Avis clients après achat vérifié',
    status: 'in-development',
    evidence: 'ReviewScreen.jsx et ProductScreen.jsx (avis de démonstration, pas de données réelles).',
  },
  salesAnalytics: {
    label: 'Statistiques de ventes et tableau de bord historisé',
    status: 'planned',
    evidence: 'Spec v3 addendum §15. Le tableau de bord actuel indique « pas encore assez d’historique ».',
  },
  salesForecast: {
    label: 'Prévision de ventes',
    status: 'planned',
    evidence: 'Spec v3 addendum §15.5 : affichée seulement au-delà d’un seuil d’historique.',
  },
  socialFeed: {
    label: 'Fil de découverte social',
    status: 'planned',
    evidence: 'Spec v3 addendum §11.2 (V2, Mois 5).',
  },
  shortVideos: {
    label: 'Vidéos courtes (shorts)',
    status: 'planned',
    evidence:
      'Spec v3 addendum §11.1 (V2, Mois 5). Le MVP ne gère que les images. Confirmé par capture d’écran réelle de l’app (public/phone-mockups/live-sales.webp), qui affiche elle-même « Bientôt disponible ».',
  },
  disputeMediation: {
    label: 'Médiation des litiges',
    status: 'planned',
    evidence: 'Spec v2 §5.4. La console admin affiche une maquette de litiges.',
  },
  refundPolicy: {
    label: 'Règles de remboursement',
    status: 'unknown',
    evidence: 'Spec v2 §4 étape 8 : règles à définir après la Phase 0.',
  },
  sellerCommission: {
    label: 'Commission SIMBA sur les ventes',
    status: 'planned',
    evidence: 'Spec v2 §6 : 0 % au MVP, commission prévue en Phase 4. Montants non arrêtés.',
  },
  loyaltyProgram: {
    label: 'Programme de fidélité et points',
    status: 'planned',
    evidence: 'Spec v2 §8 (Phase 4).',
  },
} as const satisfies Record<string, Feature>

export type FeatureKey = keyof typeof features

export const statusCopy: Record<FeatureStatus, string> = {
  live: 'Disponible',
  'in-development': 'En développement',
  planned: 'Prévu',
  unknown: 'À confirmer',
}
