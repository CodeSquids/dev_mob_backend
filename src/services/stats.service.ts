import { sequelize } from "../config/init.ts";

export const StatsEnseignant = async () => {
  const sql = `
    SELECT
      MIN(nbheures * tauxhoraire) AS salaire_min,
      MAX(nbheures * tauxhoraire) AS salaire_max,
      SUM(nbheures * tauxhoraire) AS salaire_total
    FROM enseignants
  `;

  const [result] = await sequelize.query(sql);
  return result[0];
};
