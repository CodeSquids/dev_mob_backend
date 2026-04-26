import type { Request, Response } from "express";
import { DeleteEnseignant } from "../services/delete.service.ts";
import { UpdateEnseignant } from "../services/modify.service.ts";

// Controller Update
export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await UpdateEnseignant(id, req.body)
  res.json(result)
}

// Controller Delete
export const erase = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await DeleteEnseignant(id)
  return res.json(result)
}