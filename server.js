var express = require('express');
var snekfetch = require('snekfetch')
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/hook", function (req, res) {
  if (req.headers.authorization !== "lmao") return res.send("BAAD")
    var user_id = req.body.user;
    var bot = req.body.bot;
snekfetch("https://discordapp.com/api/webhooks/445111925177712655/G3m0xTE73LqYi2o_Nrbja6psez_BRbJ4GgR0-PJPzeJLwdnR2xpJsLymYd5SB4l_ApYB")
    res.send("good");
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
