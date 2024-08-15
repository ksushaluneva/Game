const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const startData = require('./controllers/start');
const gameData = require('./controllers/game');

app.use('/start', startData.startGamePage);

app.get('/game', gameData.game);


app.listen(3000);