import connect from "../db/connectDB.js";

const conexion = (await connect())


export default class ModelAuthen {

    static async login(email, collection) {
        try {
            const con = conexion.db().collection(collection);
            const getUser = await con.findOne({ correo: email });
            return getUser;
        } catch (error) {
            return error;
        }
    }
}