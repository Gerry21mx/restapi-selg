import {unidad} from '../models/unidadModel'

export const getUnidades = async (req, res) => {
  try {
    const result = await unidad.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const getUnidad = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await unidad.findByPk(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};
export const postUnidad = async (req, res) => {
  try {
    const { idCliente, año, marca, modelo, motor} = req.body;
    if (idCliente <= 0) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const newUnidad = {
      idCliente,
      año,
      marca,
      modelo,
      motor
    };
    await unidad.create(newUnidad);
    res.json({ message: "Unidad agregada correctamente" });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const updateUnidad = async (req, res) => {
  try {
    const { idCliente, año, marca, modelo, motor } = req.body;
    const { id } = req.params;
    if (id <= 0 ) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const result = await unidad.findByPk(id);
    result.idCliente = idCliente;
    result.año = año;
    result.marca = marca;
    result.modelo = modelo;
    result.motor = motor;
    result.save();
    res.json({message: 'Unidad actualizada correctamente', response:result});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const deleteUnidad = async (req, res) => {
  try {
    const { id } = req.params;
    await unidad.destroy({
      where: {
        id: id
      }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
