const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const sequelize = require('./db.js'); // Certifique-se de que o caminho está correto

// Importando os modelos
const User = require('./models/user'); 
// const Product = require('./models/product'); 
// const Produto = require('./models/produtos_amazon.js'); 
const Payment = require('./models/payment'); 
const Order = require('./models/order'); 
const Category = require('./models/category');

// Importando as rotas
var userRouter = require('./router/userRouter');
var orderRouter = require('./router/userRouter');
var produtoRouter = require('./router/produtoRouter'); // Nova rota para produtos
const cartRouter = require('./router/cartRouter');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Rota para criação de usuário
app.post('/create-user', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Usando as rotas de usuário e produto
app.use("/user", userRouter);
app.use("/produto", produtoRouter); // Adicionando a rota para produtos
app.use('/cart', cartRouter);
// Autenticando e sincronizando com o banco de dados
sequelize.authenticate()
  .then(() => {
    return sequelize.sync(); // Sincroniza os modelos com o banco de dados
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
