import type { Request, Response } from "express";
import { DeleteEnseignant } from "../services/delete.service";
import { UpdateEnseignant } from "../services/modify.service";
import {CreateEnseignant} from "../services/create.service";
import { AllEnseignant } from "../services/selectAll.service";
import { StatsEnseignant } from "../services/stats.service";

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
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" })
    }
    const result = await UpdateEnseignant(id, req.body)
    res.json(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

// Controller Delete
export const erase = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await DeleteEnseignant(id)
  return res.json(result)
}