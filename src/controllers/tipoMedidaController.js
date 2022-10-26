import { tipoMedida } from "../models/tipoMedidaModel";

export const getTiposMedida = async (req, res) => {
  try {
    const result = await tipoMedida.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};
export const getTipoMedida = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await tipoMedida.findByPk(id);
    res.json(result);
    } catch (error) {
    res.status(500).json({message: error.message});
  }
}
export const postTipoMedida = async (req,res) => {
  try {
    const { nombre } = req.body;
    if(nombre === null) {
      res.status(400).json({message: 'Bad request, please fill all'});
    }
    const newTipoMedida = {
      nombre
    }
    await tipoMedida.create(newTipoMedida);
    res.json({message: 'Tipo medida agregado correctamente'});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const updateTipoMedida = async (req,res) => {
  try {
    const { nombre } = req.body;
    const { id } = req.params;
    const result = await tipoMedida.findByPk(id);
    result.nombre = nombre;
    result.save();
    res.json({message: 'Tipo medida actializado correctamente'});
  } catch (error) {
    res.status(500).json({message: error.messge});
  }
};
export const deleteTipoMedida = async (req,res) => {
  try {
    const { id } = req.params;
    await tipoMedida.destroy({
      where: {
        id: id
      }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({message: error.mesagge})
  }
};