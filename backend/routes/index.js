const express = require('express');
const utils = require('./utils');
const cors = require('cors')
const Router = express.Router();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
Router.use(cors())
Router.use(express.json())

Router.get('/bioData/:bioName', async (req, res) => {
    const data = await utils.bioCall(req.params.bioName)
    res.send(JSON.parse(data))
});

Router.post('/searchTalent',  async (req, res) => {
    const data = await utils.searchPeople(req.body.requestData, {offset:0, size:20, page:0})
    res.send(JSON.parse(data))
});

module.exports =  Router;