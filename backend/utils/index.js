import fs from "fs";

const getData = () => {
  try {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateData = (users) => {
  try {
    fs.writeFileSync("./data.json", JSON.stringify(users));
  } catch (error) {
    throw new Error(error.message);
  }
};

const params = ["name", "surname", "phone", "email", "gender", "age"];
const isInValid = (user) => {
  return params.some((param) => !user[param]);
};

export { getData, updateData, isInValid };
