import { Enseignant } from "../models/db.model";
import type { Enseignants } from "../models/enseignant.model";

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