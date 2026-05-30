"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erase = exports.update = exports.stats = exports.all = exports.insert = void 0;
const delete_service_1 = require("../services/delete.service");
const modify_service_1 = require("../services/modify.service");
const create_service_1 = require("../services/create.service");
const selectAll_service_1 = require("../services/selectAll.service");
const stats_service_1 = require("../services/stats.service");
// Controller Insert
const insert = async (req, res) => {
    const result = await (0, create_service_1.CreateEnseignant)(req.body);
    res.json(result);
};
exports.insert = insert;
// Controller All Enseignants 
const all = async (req, res) => {
    const result = await (0, selectAll_service_1.AllEnseignant)();
    res.json(result);
};
exports.all = all;
// Controller Stats Enseignants
const stats = async (req, res) => {
    const result = await (0, stats_service_1.StatsEnseignant)();
    res.json(result);
};
exports.stats = stats;
// Controller Update
const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        const result = await (0, modify_service_1.UpdateEnseignant)(id, req.body);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.update = update;
// Controller Delete
const erase = async (req, res) => {
    const id = Number(req.params.id);
    const result = await (0, delete_service_1.DeleteEnseignant)(id);
    return res.json(result);
};
exports.erase = erase;
