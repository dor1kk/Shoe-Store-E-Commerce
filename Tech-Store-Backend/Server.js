const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser=require('body-parser')
const mysql = require('mysql');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { signUpUser, signInUser, checkUserId, checkRole, checkImage, Logout, checkUsername} = require('./Routes/SignIn-Up-Route');
const { getCategories } = require('./Routes/Categories');
const { getProducts, getProductsById } = require('./Routes/Products');
const { makeAnOrder, getMyOrders } = require('./Routes/Orders');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5009;

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
  }));
  
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 
    }
  }));
  

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID ' + connection.threadId);
  connection.release();
});

app.post('/api/auth/register', (req, res) => {
    signUpUser(req,res,pool);

});

app.post('/api/auth/login', (req, res) => {
  signInUser(req,res,pool);
});

app.post('/api/auth/logout', (req, res) => {
 Logout(req,res);
});

app.get('/api/auth/username', (req, res) => {
    checkUsername(req,res,pool);
});
  
app.get('/role', (req, res) => {
    checkRole(req, res); 
  });

  app.get('/image', (req, res) => {
    checkImage(req, res); 
  })

app.get('/userid', (req, res) => {
    checkUserId(req, res); 
  });
  


app.get('/api/auth/categories',(req,res)=>{
    getCategories(req,res,pool);
})


app.get('/api/auth/products',(req,res)=>{
    getProducts(req,res,pool);
})

app.get('/api/auth/products/:id', (req, res) => {
    getProductsById(req, res, pool);
  });


  app.post('/api/auth/orderitems', (req, res) => {
    makeAnOrder(req,res,pool);    
})

app.get('/api/auth/my-orders', (req, res) => {
    getMyOrders(req, res, pool);
  });

  
  
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
