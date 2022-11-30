const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');
const userRoutes = require('./routes/users-routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));

app.use('/users', userRoutes);
app.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, () => console.log('Server listen 3000'));
