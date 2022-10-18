import { getConnection } from "../database/database";

const getServicios = async (req, res) => {
  try{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM servicio");
    res.json(result);
  } catch (error){
    res.status(500);
    res.send(error.message)
  }
  
}
const getServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM servicio WHERE id = ?",id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
const postServicio = async (req, res) => {
  try{ 
    const {nombre, descripcion,precio} = req.body;
    if(nombre === undefined || precio <= 0){
      res.status(400).json({message: "Bad Request, pleas fill all required field"});
    }
    const servicio = {
      nombre,
      descripcion,
      precio
    }
    const connection = await getConnection();
    await connection.query("INSERT INTO servicio SET ?",servicio);
    res.json({message: "Servicio agregado correctamente"});
  } catch(error) {
    res.status(500);
    res.send(error.message);
  }
}
const updateServicio = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const { id } = req.params;
    if(id === undefined || nombre === undefined || precio <= 0){
      res.status(400).json({message: "Bad Request, pleas fill all required field"});
    }
    const servicio = {
      id,
      nombre,
      descripcion,
      precio,
    };
    const connection = await getConnection();
    const result = await connection.query("UPDATE servicio SET ? WHERE id = ?",[servicio,id]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const deleteServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM servicio WHERE id = ?",id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
export const methods= {
  getServicios,
  getServicio,
  postServicio,
  updateServicio,
  deleteServicio
}