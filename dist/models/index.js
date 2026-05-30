"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const init_1 = require("../config/init");
const initModels = async () => {
    try {
        await init_1.sequelize.authenticate();
        console.log("DB connected");
        await init_1.sequelize.sync();
        console.log("Models set");
    }
    catch (error) {
        console.error("DB error: ", error);
    }
};
exports.initModels = initModels;
