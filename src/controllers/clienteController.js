import { cliente } from '../models/clienteModel';
import { unidad } from '../models/unidadModel';

export const getClientes = async (req, res) => {
  try {
    const result = await cliente.findAll()
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await cliente.findByPk(id);
    if(result === null)
    return res.json({message: 'no se encontro el cliente'})
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUnidadCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await unidad.findAll({
      where: {
        idCliente: id,
      },
    });
    if(!result)
      res.status(404).json({message: 'Cliente no cuenta con unidades'});
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const postCliente = async (req, res) => {
  try {
    const { apellidoPaterno,apellidoMaterno,nombre, cp, calle, numeroExterior, interior,colonia, municipio,estado,telefono,celular,email} = req.body;
    if (nombre === null || celular === null) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const newCliente = {
      apellidoPaterno,
      apellidoMaterno,
      nombre,
      cp,
      calle,
      numeroExterior,
      interior,
      colonia,
      municipio,
      estado,
      telefono,
      celular,
      email
    };
    await cliente.create(newCliente);
    res.json({ message: "Cliente agregado correctamente" });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
export const updateCliente = async (req, res) => {
  try {
    const { apellidoPaterno,apellidoMaterno,nombre, cp, calle, numeroExterior, interior,colonia, municipio,estado,telefono,celular,email} = req.body;
    const { id } = req.params;
    if (id <= 0) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const result = await cliente.findByPk(id);
      result.apellidoPaterno = apellidoPaterno;
      result.apellidoMaterno = apellidoMaterno;
      result.nombre = nombre;
      result.cp = cp;
      result.calle = calle;
      result.numeroExterior = numeroExterior;
      result.interior = interior;
      result.colonia = colonia;
      result.municipio = municipio;
      result.estado = estado;
      result.telefono = telefono;
      result.celular = celular;
      result.email = email;
      await result.save();
    res.json({message: 'Cliente actualizado correctamente',response:result});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await cliente.destroy({
      where: {
        id: id
      }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
