import { sequelize } from "../config/init.ts";

export const AllEnseignant = async () => {
  const sql = `
    SELECT 
      numens,
      nom,
      nbheures,
      tauxhoraire,
      (nbheures * tauxhoraire) AS salaire
    FROM enseignants
  `;

  const [result] = await sequelize.query(sql);
  return result;
};
