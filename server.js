const express = require('express');
const app = express();
const phin = require('phin')
const config = require('./config.json')

const webhookurl = config.webhookurl
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.send({"message": "this is not a website kthx"})
});

app.post("/hook", async (req, res) => {
  if ('a' === 'a') return res.send('this is a demo') //remove this line to make this code useable
  if (req.headers.authorization !== config.auth) return res.send({code: "invalid auth"})
  let user_id = req.body.user;
  let bot = req.body.bot;
  let content = `<@${user_id}> voted <@${bot}>`
  if (req.body.type === "test") content = content + '  (This is a test)'
  phin({
    url: webhookurl,
    method: 'POST',
    data: {
        content: content
    }
})
    res.send({code: "success"});
});

app.use("/", function(req, res) {
res.send({"error": "404 page not found"})
})

let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
