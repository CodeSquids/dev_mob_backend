import { Enseignant } from "../models/db.model";
import type { Enseignants } from "../models/enseignant.model";

export const CreateEnseignant = async (data: Omit<Enseignants, 'numens'>) => {
  return await Enseignant.create(data);
}