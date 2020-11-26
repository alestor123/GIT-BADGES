require('dotenv').config()
var express = require('express'),
app = express(),
axios = require('axios'),
port = process.env.PORT || 3000,
Model = require('./model/model'),
mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/ghviews', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
app.get('/views/:user/:repo', async (req, res) => {
    var { user, repo } = req.params,
    flag = 1,
    { counter } = await Model.findOneAndUpdate({ key: `${user}/${repo}` }, { $inc: { counter: flag } }, { upsert: true, new: true }).exec();
        axios.get(`https://img.shields.io/badge/Views-${counter}-brightgreen${req.originalUrl.slice(req.originalUrl.indexOf('?'))}`)
  .then((response) => {
    res.contentType('image/svg+xml').header('Cache-Control', 'no-cache,max-age=600').send(response.data)
})
})
app.listen(port, () => console.log(`server running at ${port}`))
