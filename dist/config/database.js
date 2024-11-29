"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("./dotenv"));
const ConnectDB = async () => {
    try {
        await mongoose_1.default.connect(dotenv_1.default.MONGO_URL, {});
        console.log("mongodb connection...");
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
exports.default = ConnectDB;
