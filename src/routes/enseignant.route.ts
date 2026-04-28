import { Router } from "express";
import * as controller from "../controllers/enseignant.controller.ts"

const router = Router()

router.post("/", controller.insert)

router.get("/", controller.all)
router.get("/stats", controller.stats)

router.put("/:id", controller.update)
router.delete("/:id", controller.erase)
export default router