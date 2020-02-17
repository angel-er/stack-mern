const express = require('express');
const path = require('path');
require('./database/mongoose');
const User = require('./models/user');
const morgan = require('morgan');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../frontend/public')));
// app.get('/', (req, res) => {
//   res.json({message: 'Home'});
// });

app.use('/api/users', userRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server connect on port: ${port}`);
});
