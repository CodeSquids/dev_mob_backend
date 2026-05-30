"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enseignant = void 0;
const sequelize_1 = require("sequelize");
const init_1 = require("../config/init");
class Enseignant extends sequelize_1.Model {
}
exports.Enseignant = Enseignant;
Enseignant.init({
    numens: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nbheures: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    tauxhoraire: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: init_1.sequelize,
    modelName: "Enseignant",
    tableName: "enseignants",
    timestamps: false
});
