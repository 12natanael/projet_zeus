# Interface Mandataire (Module A)

Une interface web React + TypeScript pour la gestion de mandats d'investigation numérique. Ce module permet aux mandataires (juges, chefs d'entreprise, particuliers) de créer, suivre et gérer des mandats d'investigation de manière sécurisée et traçable.

## ✨ Fonctionnalités

### Fonctionnalités Implémentées ✅
- **Tableau de bord** : Liste centralisée des mandats avec statuts et détails
- **Création de mandat** : Formulaire en 3 étapes (Details → Expert → Téléchargement)
- **Sélection d'expert** : Affichage des experts recommandés avec scores
- **Sidebar responsive** : Navigation avec sidebar desktop et mobile drawer
- **Gestion des onglets** : Dashboard, Historique, Experts, Nouveau mandat
- **Interface moderne** : Design responsive (mobile, tablette, desktop)

### Fonctionnalités Planifiées 📋
- Authentification JWT
- Synchronisation API backend
- Téléchargement PDF signé
- Notifications en temps réel
- Historique complet et filtrage

## 🛠 Technologies Utilisées

- **Frontend** : React 19 + TypeScript
- **Styling** : Tailwind CSS
- **Build** : Vite 8
- **Icônes** : Lucide React
- **Package Manager** : npm

## 📁 Architecture

```
src/
├── components/
│   ├── App.tsx              # Application principale + layout
│   ├── Sidebar.tsx          # Navigation sidebar + mobile drawer
│   ├── Dashboard.tsx        # Tableau de bord des mandats
│   ├── FormulaireMandat.tsx # Formulaire 3 étapes
│   ├── DetailsMandat.tsx    # Étape 1: Détails du cas
│   ├── ChoixExpert.tsx      # Étape 2: Sélection expert
│   ├── TelechargementMandat.tsx # Étape 3: Finalisation
│   └── MandateList.tsx      # Détails mandat
├── services/
│   └── api.ts              # Services API
├── types/
│   └── index.ts            # Interfaces TypeScript
├── App.tsx                 # Point d'entrée
├── main.tsx                # Bootstrap React
├── index.css               # Styles Tailwind
└── App.css                 # Styles locaux
```

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/12natanael/projet_zeus.git
   cd modules/module-a
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer en développement**
   ```bash
   npm run dev
   ```
   L'application sera disponible sur http://localhost:5173 (ou le prochain port disponible)

4. **Build pour production**
   ```bash
   npm run build
   ```

## 🚀 Utilisation

### Accéder aux différentes sections
- **Tableau de bord** : Vue principale avec la liste des mandats
- **Nouveau mandat** : Formulaire en 3 étapes pour créer un mandat
- **Experts** : Liste des experts disponibles
- **Historique** : Consultation des mandats précédents

### Créer un Mandat (Flux en 3 étapes)

**Étape 1 : Détails du mandat**
- Titre de l'affaire *
- Type de cas (Fraude Bancaire, Intrusion Réseau, Vol de Données)
- Priorité (Minimal, Standard, Avancée, Critique)
- Description détaillée

**Étape 2 : Choix de l'expert**
- Affichage des 3 meilleurs experts recommandés
- Sélection basée sur les compétences et le score

**Étape 3 : Finalisation**
- Résumé du mandat
- Expert assigné
- Téléchargement du PDF (à implémenter)

## 🎨 Design System

### Layout Principal
- **Sidebar desktop** : 64px (w-64) gris foncé (slate-900)
- **Mobile drawer** : Overlay avec drawer latéral
- **Header** : 64px de hauteur avec menu toggle mobile
- **Contenu** : Zone scrollable avec padding responsive

### Couleurs
- **Primaire** : Blue-600 (boutons, sélections actives)
- **Fond** : Slate-50 (arrière-plan principal)
- **Texte** : Slate-800, Slate-600, Slate-400
- **Bordures** : Slate-200, Slate-100

## 📝 Structure des Données

### Mandat (Mandate)
```typescript
interface Mandate {
  id: string;
  type: string;
  priority?: string;
  status: string;
  date?: string;
  desc?: string;
  title?: string;
  description?: string;
  progress?: number;
  expert?: string;
}
```

### Expert
```typescript
interface Expert {
  id: string;
  nom: string;
  prenom: string;
  score: string;
  justification: string;
  competences: string[];
}
```

### Données du Cas
```typescript
interface CaseData {
  title: string;
  case_type: string;
  priority: string;
  description: string;
}
```

## 📜 Scripts npm

```bash
npm run dev         # Lancer le serveur de développement
npm run build       # Build pour production
npm run preview     # Prévisualiser le build localement
npm run lint        # Vérifier le linting ESLint
```

## 🔧 Configuration

### TypeScript
- Fichiers de config: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Options : `verbatimModuleSyntax`, `noUnusedLocals`, `noUnusedParameters`

### Tailwind CSS
- Importé via `@import "tailwindcss"` dans `index.css`
- Utilities classes pour responsive design et thématisation

### Vite
- Config: `vite.config.ts`
- Port par défaut: 5173
- Support JSX/TSX natif

## 🌐 Types d'Onglets

```typescript
type TabKey = 'dashboard' | 'experts' | 'historique' | 'nouveau';
```

## 📱 Responsivité

| Breakpoint | Affichage |
|-----------|-----------|
| Mobile (< 1024px) | Drawer mobile + Header full-width |
| Tablette (1024px - 1400px) | Sidebar + Contenu adapté |
| Desktop (> 1400px) | Sidebar complet + Layout optimal |

## ✅ Checklist d'Implémentation

- [x] Composant Sidebar responsive
- [x] Tableau de bord avec liste des mandats
- [x] Formulaire 3 étapes pour nouveau mandat
- [x] Sélection d'expert avec scoring
- [x] Navigation par onglets
- [x] Responsive design mobile/tablet/desktop
- [x] TypeScript strict (forbid any)
- [ ] Intégration API backend
- [ ] Authentification JWT
- [ ] Téléchargement PDF signé
- [ ] Notifications
- [ ] Dark mode

## 📞 Support & Contribution

Pour toute question, consultez la documentation ou contactez l'équipe de développement.

**Branche active** : `module-a/development`
**Repository** : https://github.com/12natanael/projet_zeus

```
