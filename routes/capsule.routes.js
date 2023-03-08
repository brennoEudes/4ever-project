import express from "express";
import { CapsuleModel } from "../model/capsule.model.js";
import { UserModel } from "../model/user.model.js";
import isAuth from "../middlewares/isAuth.js";
import attachCurrentUser from "../middlewares/attachCurrentUser.js";

const capsuleRouter = express.Router();

capsuleRouter.post(
  "/create-capsule",
  isAuth,
  attachCurrentUser,
  async (req, res) => {
    try {
      const user = req.currentUser;

      const newCapsule = await CapsuleModel.create({
        ...req.body,
        capsuleCreator: user._id,
      });

      await UserModel.findByIdAndUpdate(
        user._id,
        {
          $push: { capsulesCreated: newCapsule._id },
        },
        { runValidators: true }
      );
     
      return res.status(201).json(newCapsule);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
);

capsuleRouter.get("/dashboard", isAuth, attachCurrentUser, async (req, res) => {
  try {

    const allCapsules = await CapsuleModel.find({});

    return res.status(200).json(allCapsules);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Capsulas não encontradas.");
  }
});

capsuleRouter.put("/edit", isAuth, attachCurrentUser, async (req, res) => {
  try {
    const updatedCapsule = await CapsuleModel.findByIdAndUpdate(
      { _id: req.currentUser._id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedCapsule);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro!");
  }
});

capsuleRouter.delete("/delete", isAuth, attachCurrentUser, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCapsule = await CapsuleModel.findByIdAndDelete(id);

    return res.status(200).json(deletedCapsule);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro!");
  }
});

export default capsuleRouter;
