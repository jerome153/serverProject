const express = require('express');
const app = express();

app.get('/ppgod', (req, res) =>  {

res.send({bye: 'buddy'});
});

const PORT = process.env.PORT || 5000;
app.listen(5000);

//localhost:5000
