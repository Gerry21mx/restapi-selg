import { unidadMedida } from "../models/unidadMedidaModel";

export const getUnidadesMedida = async (req, res) => {
  try {
    const result = await unidadMedida.findAll();
    console.log('hola');
    res.json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const getUnidadMedida = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await unidadMedida.findByPk(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const postUnidadMedida = async (req, res) => {
  try {
    const { nombre, simbolo,idTipoMedida } = req.body;
    if(simbolo === null){
      res.status(400).json({message: 'Bad request, pleas fill all'})
    }
    const newUnidadMedida = {
      nombre,
      simbolo,
      idTipoMedida
    }
    await unidadMedida.create(newUnidadMedida);
    res.json({message: 'Unidad de medida agregada correctamente'});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const updateUnidadMedida = async (req, res) => {
  try {
    const { nombre, simbolo, idTipoMedida} = req.body;
    const { id } = req.params;
    if(id <= 0){
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const result = await unidadMedida.findByPk(id);
    result.nombre = nombre;
    result.simbolo = simbolo;
    result.idTipoMedida = idTipoMedida;
    result.save();
    res.json({message: 'Unidad medida actualizada correctamente'});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const deleteUnidadMedida = async (req, res) => {
  try {
    const { id } = req.params;
    await unidadMedida.destroy({
      where: {
        id: id
      }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};