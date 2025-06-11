const express = require('express');
const { dbConnection } = require('../database/config');

const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.experiencePath = '/api/experience';

    this.dataBaseConnect();

    this.middlewares();

    this.routes();
  }

  async dataBaseConnect() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.experiencePath, require('../routes/experience'));
    // this.app.use(this.rolesPath, require('../routes/roles'));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
