import axios from "axios";
import type { Mandat } from "../types/index";

const API_URL = "http://localhost:8000/api/v1"; // URL par défaut de FastAPI

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const mandateService = {
  // Envoi du mandat au backend
  createMandate: async (mandat: Partial<Mandat>) => {
    const response = await api.post("/cases", mandat);
    return response.data;
  },

  // Récupération de la liste (pour le futur tableau de bord)
  getMandates: async () => {
    const response = await api.get("/cases");
    return response.data;
  },
};
