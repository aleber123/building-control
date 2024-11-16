"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const buildings_1 = __importDefault(require("./routes/buildings")); // Adjust path if needed
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)()); // Enable CORS
app.use(express_1.default.json()); // Parse JSON bodies
// Use the building routes
app.use('/buildings', buildings_1.default);
app.get('/', (req, res) => {
    res.send('Hello from TypeScript Express server!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
