import { getData } from "../utils/index.js";

const data = getData();

export const findUserById = (req, res, next) => {
  const foundUser = data.find((user) => user.id === req.params.id);
  if (!foundUser) {
    return res
      .status(404)
      .json({ message: "The user you are looking for does not exist!" });
  }
  req.foundUser = foundUser;

  next();
};
