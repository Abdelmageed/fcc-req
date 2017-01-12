const express = require ('express'),
      favicon = require ('serve-favicon'),
      app = express ()

app.use (favicon ((__dirname + '/public/favicon.ico')))
app.get ('/', (req, res) => {
    let userAgent = req.get('user-agent'),
        ip = req.ip,
        lang = req.get ('accept-language').split (',')[0]
    platform = userAgent.match (/[\w\s;.]*(?=\))/)[0]
    res.json ({
        ip: ip,
        os: platform,
        language: lang 
    })
})


app.listen (process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})