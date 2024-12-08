import { getData, isInValid, updateData } from "../utils/index.js";
import crypto from "crypto";

const getAllUsers = (req, res) => {
  try {
    const users = getData();
    const newUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
    }));

    res.status(200).json({
      users: newUsers,
    });
  } catch (error) {
    res.status(500).json({ message: "Server is down" });
  }
};
const getUser = (req, res) => {
  if (!req.foundUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ user: req.foundUser });
};
const addUser = (req, res) => {
  if (isInValid(req.body)) {
    return res.status(404).json({ message: "User params are not valid" });
  }

  const users = getData();

  const newUser = {
    id: crypto.randomUUID(),
    ...req.body,
  };

  users.push(newUser);

  updateData(users);

  res.status(200).json({ user: newUser });
};
const updateUser = (req, res) => {
  const users = getData();
  const foundIndex = users.findIndex((user) => user.id === req.params.id);
  if (foundIndex === -1) {
    return res.status(404).json({ message: "Error" });
  }

  const updatedUser = { ...req.foundUser, ...req.body };
  users.splice(foundIndex, 1, updatedUser);
  updateData(users);
  res.status(200).json({ user: updatedUser });
};
const deleteUser = (req, res) => {
  const users = getData();
  const foundIndex = users.findIndex((user) => user.id === req.params.id);
  if (foundIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(foundIndex, 1);
  updateData(users);
  res.status(204).json({});
};

export { getAllUsers, getUser, addUser, updateUser, deleteUser };
