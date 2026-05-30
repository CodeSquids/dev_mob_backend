"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnseignant = void 0;
const db_model_1 = require("../models/db.model");
const UpdateEnseignant = async (id, data) => {
    const { numens, ...updateData } = data;
    return await db_model_1.Enseignant.update(updateData, {
        where: {
            numens: id
        }
    });
};
exports.UpdateEnseignant = UpdateEnseignant;
