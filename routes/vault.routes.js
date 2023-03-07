import express from "express";
import { VaultModel } from "../model/vault.model.js";

const vaultRouter = express.Router();

vaultRouter.post("/create-vault", async (req, res) => {
  try {
    const newVault = await VaultModel.create(req.body);
    return res.status(201).json(newVault);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

vaultRouter.get("/dashboard", async (req, res) => {
  try {
    const vaults = await VaultModel.find();

    return res.status(200).json(vaults);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Vaults não encontrados.");
  }
});

vaultRouter.get("/oneVault/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const oneVault = await VaultModel.findById(id);

    if (!oneVault) {
      return res.status(404).json("Vault não encontrado.");
    }

    return res.status(200).json(oneVault);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro!");
  }
});

vaultRouter.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedVault = await VaultModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedVault);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro!");
  }
});

vaultRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedVault = await VaultModel.findByIdAndDelete(id);

    return res.status(200).json(deletedVault);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro!");
  }
});

export default vaultRouter;
