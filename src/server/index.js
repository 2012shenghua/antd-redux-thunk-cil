var express = require('express')

var app = express();
app.get('/',function (req,res) {

    data = {
        'a':'a',
        'b':'b'
    }
    console.log(data)

    res.send('hello world1');
})

app.get('/data', function (req, res) {
    res.json({
        name:'zhu'
    });
})

app.listen(3003)