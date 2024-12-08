export const updateName = (name: string, surname: string): string => {
  const newName =
    name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
  return newName;
};

export const createBackground = (): string => {
  const bgColor = Math.floor(Math.random() * 999999);

  return `#${bgColor}`;
};
