import express from 'express';
import dotenv from 'dotenv';
import testRouter from './route'; 
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/test', testRouter);


app.listen(port, () => {
  console.log("Servidor en funcionamiento en el puerto " + port);
});
