var express = require('express');
var snekfetch = require('snekfetch')
var app = express();


var webhookurl = "https://discordapp.com/api/webhooks/445111925177712655/G3m0xTE73LqYi2o_Nrbja6psez_BRbJ4GgR0-PJPzeJLwdnR2xpJsLymYd5SB4l_ApYB"
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.send("dis is not a website kthx")
});

app.post("/hook", function (req, res) {
  if (req.headers.authorization !== "lmao") return res.send({code: "invalid auth"})
    var user_id = req.body.user;
    var bot = req.body.bot;
  if (req.body.type === "test") {
    snekfetch.post(webhookurl).send({ "content": `<@${user_id}> voted <@${bot}> (This is a test)`}).then(r => {})
  } else {
    snekfetch.post(webhookurl).send({ "content": `<@${user_id}> voted <@${bot}>`}).then(r => {})
}
    res.send({code: "success"});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
