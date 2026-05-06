import { Enseignant } from "../models/db.model";

export const DeleteEnseignant = async (id: number) => {
  return await Enseignant.destroy(
    {
      where: {
        numens: id
      }
    }
  )
}