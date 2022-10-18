import { config } from "dotenv";

config();

export default {
  host: process.env.HOSTDB || "",
  database: process.env.DATABASE || "",
  user: process.env.USERDB || "",
  password: process.env.PASSWORDDB || ""
}