const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const router = require('./router/QTV/index.js');
const server = http.createServer(app);
const Socket_IO = require('./socketIO/index.js');
const io = new Server(server, {
  cors: {
    origin: (_, callback) => callback(null, true),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  },
});
app.use('/static', express.static(path.join(__dirname, 'public')));
dotenv.config();
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
    optionsSuccessStatus: 200,
    exposedHeaders: true,
  }),
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
//router
io.on('connection', (socket) => {
  Socket_IO(socket, app);
});

router(app);
const PORT = process.env.HOSTING_SERVER_INDEX;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
