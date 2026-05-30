"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./models/index");
const dotenv_1 = __importDefault(require("dotenv"));
const enseignant_route_1 = __importDefault(require("./routes/enseignant.route"));
dotenv_1.default.config();
const PORT = Number(process.env.PORT);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/enseignants", enseignant_route_1.default);
// Test route at root
app.get("/", (req, res) => {
    res.json({ message: "Root endpoint working" });
});
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});
async function start() {
    try {
        await (0, index_1.initModels)();
        app.listen(PORT, () => {
            console.log("Server running on port ", PORT);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}
start();
