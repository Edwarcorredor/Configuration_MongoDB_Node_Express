import bcrypt from "bcrypt";
import ModelAuthen from "../models/ModelAuthen.js";

const login = async ({email, password}) => {
    try {
        if (!email || !password)
            throw { status: 400, message: "Faltan datos" };

        const user = await ModelAuthen.login(email, collection);

        if (!user)
            throw { status: 400, message: "Usuario no encontrado" };

        const valid = await bcrypt.compare(password, user.password);
        if (!valid)
            throw { status: 400, message: "Contraseña incorrecta" };
        return user;

    } catch (error) {
        return error; 
    }
};

export default login;