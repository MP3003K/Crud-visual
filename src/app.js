import express from 'express'
import morgan from 'morgan'
import alumnoRoutes from './routes/alumno.routes'
import userRoutes from './routes/user.routes'


const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/',function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});

app.use('/alumno', alumnoRoutes);

export default app;