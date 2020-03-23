const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

const productsRouter = require('./routes/products.routes');
const ordersRouter = require('./routes/orders.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

