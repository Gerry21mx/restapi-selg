import { producto } from '../models/productoModel'

export const getProductos = async (req, res) => {
  try {
    const result = await producto.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await producto.findByPk(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const postProducto = async (req, res) => {
  try {
    const { nombre, medida, precio, idUnidadMedida } = req.body;
    if (idCliente <= 0) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const newProducto = {
      nombre,
      medida,
      precio,
      idUnidadMedida
    };
    await unidad.create(newProducto);
    res.json({ message: "Producto agregado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateProducto = async (req, res) => {
  try {
    const { nombre, medida, precio, idUnidadMedida } = req.body;
    const { id } = req.params;
    if (id <= 0) {
      res
        .status(400)
        .json({ message: "Bad Request, pleas fill all required field" });
    }
    const result = await producto.findByPk(id);
    result.nombre = nombre;
    result.medida = medida;
    result.precio = precio;
    result.idUnidadMedida = idUnidadMedida;
    result.save();
    res.json({ message: "Producto actualizado correctamente", response: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await producto.destroy({
      where: {
        id: id
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};