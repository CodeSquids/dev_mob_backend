"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEnseignant = void 0;
const db_model_1 = require("../models/db.model");
const DeleteEnseignant = async (id) => {
    return await db_model_1.Enseignant.destroy({
        where: {
            numens: id
        }
    });
};
exports.DeleteEnseignant = DeleteEnseignant;
