"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsEnseignant = void 0;
const init_1 = require("../config/init");
const StatsEnseignant = async () => {
    const sql = `
    SELECT
      MIN(nbheures * tauxhoraire) AS salaire_min,
      MAX(nbheures * tauxhoraire) AS salaire_max,
      SUM(nbheures * tauxhoraire) AS salaire_total
    FROM enseignants
  `;
    const [result] = await init_1.sequelize.query(sql);
    return result[0];
};
exports.StatsEnseignant = StatsEnseignant;
