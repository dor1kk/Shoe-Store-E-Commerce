const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const orderRoutes = require('./Routes/OrdersRoutes');
const categoryRoutes = require('./Routes/CategoriesRoutes');
const productRoutes = require('./Routes/ProductsRoutes');
const authRoutes = require('./Routes/AuthRoutes');




dotenv.config();

const app = express();
const PORT = 5006;

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}));



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use('/api/auth', authRoutes);

app.use('/api', categoryRoutes);

app.use('/api', productRoutes);

app.use('/api', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
