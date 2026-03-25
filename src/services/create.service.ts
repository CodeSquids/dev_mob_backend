import { Enseignant } from "../models/db.model.ts";
import type { Enseignants } from "../models/enseignant.model.ts";

export const createEnseignant = async (data: Omit<Enseignants, 'numens'>) => {
  return await Enseignant.create(data);

}