"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new userModel_1.default({ name, email, password });
        await user.save();
        res.status(201).json({ user });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.createUser = createUser;
const getUser = async (req, res) => {
    try {
        const users = await userModel_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getUser = getUser;
const updateUser = async (req, res) => {
    try {
        const user = await userModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const user = await userModel_1.default.findByIdAndDelete(req.params.id);
        if (user) {
            res.status(200).json({ message: "User Deleted" });
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.deleteUser = deleteUser;
