// space-api/src/main.ts

import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Default route
app.get('/api', (req, res) => {
  res.send({ message: 'Assalam o alaikum! Welcome to space-api!' });
});

// New route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from space-api!' });
});

// Route with query param
app.get('/api/greet', (req, res) => {
  const name = req.query.name || 'Stranger';
  res.send({ message: `Hello, ${name}!` });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

export default app; // for testing
