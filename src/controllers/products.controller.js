import Product from "../models/Product";

export const createProduct = async (req, res) => {
  // console.log(req.body);

  const { name, category, price, imgURL } = req.body;

  const newProduct = new Product({ name, category, price, imgURL });

  const productSaved = await newProduct.save();

  // res.json("Creando producto");
  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();

  // 200 es el default si no se indica otro
  // res.json("Obteniendo productos");
  // res.status(200).json(products)
  res.json(products);
};

export const getProductById = async (req, res) => {
  // Falta validar que 'req.params.productId' sea una estructura válida para mongoDB
  // antes de hacer el 'Product.findById'

  const product = await Product.findById(req.params.productId);

  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  // Falta validar que 'req.params.productId' sea una estructura válida para mongoDB
  // antes de hacer el 'Product.findById'

  // 'new: true' ahce que se guarde en la variable el nuevo objeto ya modificado
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true,
  });

  // 204 no devuelve contenido de la respuesta
  // 200 si devuelve
  // res.status(200).json(updatedProduct);
  res.status(204).json();
};

export const deleteProductById = async (req, res) => {
  // Falta validar que 'req.params.productId' sea una estructura válida para mongoDB
  // antes de hacer el 'Product.findById'

  const { productId } = req.params;

  // No se guarda el resultado en una variable ya que no se va a mostrar en la respuesta
  // const deletedProduct = await Product.findByIdAndDelete(res.params.productId);
  await Product.findByIdAndDelete(productId);

  res.status(204).json();
};
