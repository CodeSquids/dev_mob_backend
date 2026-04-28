import type { Request, Response } from "express";
import { DeleteEnseignant } from "../services/delete.service.ts";
import { UpdateEnseignant } from "../services/modify.service.ts";
import {CreateEnseignant} from "../services/create.service.ts";
import { AllEnseignant } from "../services/selectAll.service.ts";
import { StatsEnseignant } from "../services/stats.service.ts";

// Controller Insert
export const insert = async (req: Request, res: Response) => {
  const result = await CreateEnseignant(req.body)
  res.json(result)
}

// Controller All Enseignants 
export const all = async (req: Request, res: Response) => {
  const result = await AllEnseignant()
  res.json(result)
}

// Controller Stats Enseignants
export const stats = async (req: Request, res: Response) => {
  const result = await StatsEnseignant()
  res.json(result)
}

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