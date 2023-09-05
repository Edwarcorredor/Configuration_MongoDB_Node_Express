import { SignJWT, jwtVerify } from "jose"

import dotenv from 'dotenv';

dotenv.config();



const crearToken = async (user) => {
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT(user)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
        return jwtConstructor;
}

const validarToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );

        
        return jwtData.payload;
    } catch (error) {
        console.log(error);
        return false;
    }

}

export {
    crearToken,
    validarToken
}