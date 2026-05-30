"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEnseignant = void 0;
const db_model_1 = require("../models/db.model");
const CreateEnseignant = async (data) => {
    return await db_model_1.Enseignant.create(data);
};
exports.CreateEnseignant = CreateEnseignant;
