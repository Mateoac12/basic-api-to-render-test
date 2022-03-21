import data from "../mock/data.json";

export const getProducts = (req, res) => {
  return res.json(data);
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = data.find((prod) => prod.id === id) || [];

  return res.json(product);
};

export const getProductByName = (req, res) => {
  const { name } = req.params;

  const product = data.filter((prod) => {
    const regExp = new RegExp(name, "gi");
    return prod.name.match(regExp);
  });

  return res.json(product);
};
