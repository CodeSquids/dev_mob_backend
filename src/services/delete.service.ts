import { Enseignant } from "../models/db.model.ts";

export const DeleteEnseignant = async (id: number) => {
  return await Enseignant.destroy(
    {
      where: {
        numens: id
      }
    }
  )
}