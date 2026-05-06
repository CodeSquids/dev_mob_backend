import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/init";

export class Enseignant extends Model {
  declare numens: number;
  declare nom: string;
  declare nbheures: number;
  declare tauxhoraire: number;
}

Enseignant.init({
  numens: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nbheures: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tauxhoraire: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: "Enseignant",
  tableName: "enseignants",
  timestamps: false
})