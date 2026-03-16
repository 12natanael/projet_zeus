// Interface représentant un mandataire (juge, chef d'entreprise, etc.)
export interface Mandataire {
  nom: string;
  fonction: string;
}
// Niveau de priorité pour un mandat
export type PriorityLevel = "Avancée" | "Standard" | "Minimal";

// Statut d'un mandat
export type CaseStatus = "en_attente" | "en_cours" | "termine";

// Interface représentant un mandat d'investigation
export interface Case {
  title: string;                    // Titre de l'affaire
  case_id: string;                    // Identifiant unique du mandat
  case_type: string;                  // Type de cas (fraude_bancaire, intrusion_reseau, etc.)
  description: string;                // Description détaillée du cas
  priority: PriorityLevel; // Niveau de priorité
  mandataire: Mandataire;             // Informations du mandataire
  status: CaseStatus; // Statut actuel du mandat
  created_at: string;                 // Date de création (ISO string)
  updated_at: string;                 // Date de dernière mise à jour (ISO string)
}

// Interface représentant un expert proposé pour un mandat
export interface Expert {
  id: string; // Identifiant unique de l'expert
  nom: string; // Nom de l'expert
  prenom: string; // Prénom de l'expert
  competences: string[]; // Liste des compétences
  score: string; // Score textuel (ex: "Excellent", "Bon")
  justification: string; // Explication du choix de cet expert
}
