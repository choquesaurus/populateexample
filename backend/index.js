require('dotenv').config();
import express from "express";
import conexion from './conexion/conexion';
import cors from "cors";
import morgan from "morgan";
import router from './rutas/router';
class Application{
    constructor()
    {
        this.app=express();
        this.config();
        this.routes();
    }
    config()
    {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }
    routes()
    {
        this.app.use(router);
    }
    start()
    {
        this.app.listen(process.env.PORT||5555,()=>
        {
            console.log('el servidor esta en linea');
        });
    }
}
new Application().start();