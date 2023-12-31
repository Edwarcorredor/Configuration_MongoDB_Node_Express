import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsString, IsEmail, IsUrl } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Empresas{

    /** @internal 
    ** Variables de entrada:
    ** nombre, direccion, telefono, email, sitio_web
    */

    @Expose({name: "NAME"})
    @Transform(({value}) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);
        validator: {
            $jsonSchema: {
              bsonType: "object",
              required: [],
              properties: {
                username: {
                  bsonType: "string",
                  description: "Nombre de usuario",
                },
        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el NAME"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
    nombre: string

    @Expose({name: "ADDRESS"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z0-9\s.,#-]+$/i.test(value);
        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el ADDRESS"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ADDRESS es obligatorio"}}})
    direccion: string

    @Expose({name: "PHONE"})
    @Transform(({value}) => {
        let data = /^(?:[1-9]\d*|undefined)$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el PHONE"};
        }    
    })
    telefono: string
    
    @Expose({name: "EMAIL"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|undefined+$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el EMAIL"};
        }    
    })
    email: string

    @Expose({name: "SITE_WEB"})
    @Transform(({value}) => {
        let data = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9._%+-]*)*|undefined+$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el EMAIL"};
        }    
    })
    sitio_web: string

    constructor(p1:string ="hola", p2:string ="calle #12", p3:string, p4:string, p5:string){
        this.nombre = p1;
        this.direccion = p2;
        this.telefono = p3;
        this.email = p4;
        this.sitio_web = p5;
    }

    

    

    
    
    
}