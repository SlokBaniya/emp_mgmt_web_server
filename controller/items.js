const bcrypt = require('bcrypt');
const Express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// connection factory
const knex = require('knex');
const dbConfig = require('./../knexfile');
const jwt = require('jsonwebtoken');

// create an express instance
const express = new Express();
express.use(cors());
express.use(bodyParser.json());

// ** this is is client connection
const itemsService = require('../service/items');




async function add(request, response){
      try {
    const username = request.body.username;
    const password = request.body.password;
    const hashedPassword = bcrypt.hashSync(password, 10); 

      await userService.register(username,hashedPassword);  
      response.json({
        status: 'success'        
      })
  }catch(error) {
    response.json({        
      status: 'fail'    
    })
  }
}



module.exports = {
  add
  }