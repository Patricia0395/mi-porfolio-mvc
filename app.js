const express = require('express');
const app = express();
const mainRouter = require('./routers/main')
const path = require('path');


/*recursos estaticos*/
app.use(express.static('public'));

/*configura el motor de plantillas*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

/*ruta*/
app.use('/', mainRouter);
app.use('/about', mainRouter);

app.listen(3000, ()=>(console.log('Servidor funcionando' + 3000)));
