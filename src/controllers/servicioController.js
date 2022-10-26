import {servicio} from '../models/servicioModel'

export const getServicios = async (req, res) => {
  try{
    const result = await servicio.findAll();
    res.json(result);
  } catch (error){
    res.status(500).json({message: error.message});
  }
  
}
export const getServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await servicio.findByPk(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}
export const postServicio = async (req, res) => {
  try{ 
    const {nombre, descripcion,precio} = req.body;
    if(nombre === null || precio <= 0){
      res.status(400).json({message: "Bad Request, pleas fill all required field"});
    }
    const newServicio = {
      nombre,
      descripcion,
      precio
    }
    await servicio.create(newServicio);
    res.json({message: "Servicio agregado correctamente"});
  } catch(error) {
    res.status(500).json({message: error.message});
  }
}
export const updateServicio = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const { id } = req.params;
    if(id <= 0){
      res.status(400).json({message: "Bad Request, pleas fill all required field"});
    }
    const result = await servicio.findByPk(id);
    result.nombre = nombre;
    result.descripcion = descripcion;
    result.precio = precio;
    await result.save();
    res.json({message: 'Servicio actualizado correctamente',response: result});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const deleteServicio = async (req, res) => {
  try {
    const { id } = req.params;
    await servicio.destroy({
      where: {
        id: id
      }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
