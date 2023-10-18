import express  from "express";

const testRouter = express.Router(); 

testRouter.get('/', async (_req, res) => {
  try {
    const apiUrl = 'https://rickandmortyapi.com/api/character/1';

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`La solicitud a la API falló con el código ${response.status}`);
    }

    const jsonData = await response.json();
    res.json(jsonData);
  } catch (error) {
    console.error('Error al llamar a la API:', error);
    res.status(500).json({ error: 'Ocurrió un error al llamar a la API' });
  }
});

export default testRouter;