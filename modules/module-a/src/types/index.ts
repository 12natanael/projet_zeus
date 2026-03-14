// Définition des types de dossiers possibles selon le cahier des charges
export type CaseType = "Fraude" | "Intrusion" | "Malware" | "Autre";
export type PriorityLevel = "Basse" | "Moyenne" | "Haute" | "Critique";

export interface Mandat {
  id: string;
  titre: string;
  typeCas: CaseType;
  priorite: PriorityLevel;
  description: string;
  dateCreation: string;
  mandataire: Expert;
}

export interface Expert {
  nom: string;
  fonction: string;
}
