import { Enseignant } from "../models/db.model";
import type { Enseignants } from "../models/enseignant.model";

export const UpdateEnseignant = async (id: number, data: Partial<Enseignants>) => {
  const { numens, ...updateData } = data;
  return await Enseignant.update(
    updateData,
    {
      where: {
        numens: id
      }
    }
  )
}