import { Enseignant } from "../models/db.model.ts";
import type { Enseignants } from "../models/enseignant.model.ts";

export const UpdateEnseignant = async (id: number, data: Partial<Enseignants>) => {
  return await Enseignant.update(
    data,
    {
      where: {
        numens: id
      }
    }
  )
}