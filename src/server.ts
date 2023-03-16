import express from 'express';
import cors from 'cors';
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use("/", express.static(path.join(__dirname, '/../dist', 'public')));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

export default app;
