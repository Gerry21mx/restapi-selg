import { getConnection } from "../database/database";

const getUnidades = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM unidad");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const getUnidad = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM unidad WHERE id = ?",id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const postUnidad = async (req, res) => {
  try {
    const { idCliente, año, marca, modelo, motor} = req.body;
    if (idCliente <= 0) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const unidad = {
      idCliente,
      año,
      marca,
      modelo,
      motor
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO unidad SET ?", cliente);
    res.json({ message: "Unidad agregada correctamente" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const updateUnidad = async (req, res) => {
  try {
    const { idCliente, año, marca, modelo, motor } = req.body;
    const { id } = req.params;
    if (id <= 0 || nombre === undefined || celular <= 0) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const unidad = {
      id,
      idCliente,
      año,
      marca,
      modelo,
      motor
    };
    const connection = await getConnection();
    const result = await connection.query("UPDATE unidad SET ? WHERE id = ?",[unidad, id]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const deleteUnidad = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM unidad WHERE id = ?",id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const methods = {
  getUnidades,
  getUnidad,
  postUnidad,
  updateUnidad,
  deleteUnidad,
};
