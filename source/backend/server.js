const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({message: 'Home'});
});

app.listen(port, () => {
  console.log(`Server connect on port: ${port}`);
});
