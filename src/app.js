import express from "express";
import dotenv from "dotenv";
import passportConfig from './helpers/passportHelperties.js';
import loginRouter from "./routes/loginRouter.js";

dotenv.config();


acl.config({
  filename: 'nacl.json',
  baseUrl: 'api',
  roleSearchPath: 'user.rol',
  denyCallback: (res) => res.status(403).json({
    message: 'No tienes permisos para acceder a este recurso'
  })
});

const app = express();
app.use(express.json());

app.use('/auth', loginRouter)
app.use(passportHelper.initialize());

app.get('/token/:usuario', crearToken);

app.get('/api/admin', passportHelper.authenticate('bearer', { session: false }), acl.authorize, (req, res) => {
  res.json({mensaje: 'Hola admin', usuario: req.user});
});
app.get('/api/vendedor', passportHelper.authenticate('bearer', { session: false }), acl.authorize, (req, res) => {
  res.json({mensaje: 'Hola vendedor', usuario: req.user});
});


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
  console.log(`Server is running on http:${config.hostname}:${config.port}`);
});