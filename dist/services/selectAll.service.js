"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllEnseignant = void 0;
const init_1 = require("../config/init");
const AllEnseignant = async () => {
    const sql = `
    SELECT 
      numens,
      nom,
      nbheures,
      tauxhoraire,
      (nbheures * tauxhoraire) AS salaire
    FROM enseignants
  `;
    const [result] = await init_1.sequelize.query(sql);
    return result;
};
exports.AllEnseignant = AllEnseignant;
