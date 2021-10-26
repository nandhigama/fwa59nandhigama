var express = require('express');
var router = express.Router();
value = 0

/* GET users listing. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
      if (req.method === 'GET' ) {
        const val1 = search_params.get("x")
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('Math.atan2() applied to '+val1+' is '+Math.atan2(val1) )
        res.write('<br/>Math.atanh() applied to '+val1+' is '+Math.atanh(val1))
        res.write('<br/>Math.cbrt() applied to '+val1+' is '+Math.cbrt(val1))
        res.end()
      }
  value = value+1
  res.send('User accesses are: '+value);
});

module.exports = router;
