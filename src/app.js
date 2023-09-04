import express from "express";
import dotenv from "dotenv";
import passportConfig from './helpers/passportHelperties.js';
import loginRouter from "./routes/loginRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', loginRouter)
app.use(passportConfig.initialize())
app.use(passportConfig.authenticate('bearer', { session: false }))



let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
  console.log(`Server is running on http:${config.hostname}:${config.port}`);
});