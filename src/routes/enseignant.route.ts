import { Router } from "express";
import * as controller from "../controllers/enseignant.controller.ts"

const router = Router()

router.put("/:id", controller.update)
router.delete("/:id", controller.erase)

export default router