import { getConnection } from "../database/database";

const getClientes = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM cliente");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const getCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM cliente WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const postCliente = async (req, res) => {
  try {
    const { apellidoPaterno,apellidoMaterno,nombre, cp, calle, numeroExterior, interior,colonia, municipio,estado,telefono,celular,email} = req.body;
    if (nombre === undefined || celular === undefined) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const cliente = {
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
    const connection = await getConnection();
    await connection.query("INSERT INTO cliente SET ?", cliente);
    res.json({ message: "Cliente agregado correctamente" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const updateCliente = async (req, res) => {
  try {
    const { apellidoPaterno,apellidoMaterno,nombre, cp, calle, numeroExterior, interior,colonia, municipio,estado,telefono,celular,email} = req.body;
    const { id } = req.params;
    if (id <= 0 || nombre === undefined || celular <= 0) {
      res.status(400).json({ message: "Bad Request, pleas fill all required field" });
    }
    const cliente = {
      id,
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
      email,
    };
    const connection = await getConnection();
    const result = await connection.query("UPDATE cliente SET ? WHERE id = ?",[cliente, id]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM cliente WHERE id = ?",id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const methods = {
  getClientes,
  getCliente,
  postCliente,
  updateCliente,
  deleteCliente,
};
