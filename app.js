var express = require('express');
var app = express();

var router = express.Router();
router.get('/', function(req, res) {
	res.status(200).send('hello world !');
});

app.use(router);

app.listen(3000, function() {
	console.log('server running in 3000');
});