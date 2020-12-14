const express = require('express');
const utils = require('./utils');
const cors = require('cors')
const Router = express.Router();

Router.get('/bioData/:bioName', cors(), async (req, res) => {
    const data = await utils.bioCall(req.params.bioName)
    res.send(JSON.parse(data))
});

module.exports =  Router;