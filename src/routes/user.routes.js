'use strict'

const userController = require('../controller/user.controller');
const express = require('express');
const api = express.Router();
const mdAuth = require('../services/authenticated');

api.get('/test', userController.test);


module.exports = api;