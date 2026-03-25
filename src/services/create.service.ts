import { Enseignant } from "../models/db.model.ts";
import type { Enseignants } from "../models/enseignant.model.ts";

export const UpdateEnseignant = async ( data: any) => {
  return await Enseignant.create(
    data,
  )
}