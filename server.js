var express = require('express');
var customFunc=require('./ser.js')
//console.log(customFunc.func1('./myFolder'))
var imgData;
customFunc.func1('./myFolder',(res)=>{	
	//console.log(res);
	imgData=res;
})
var app= express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./'));

app.get('/index.html',(reqq,res)=>{
	
  res.sendFile(__dirname + '/index.html');
});

app.get('/service',(req,res)=>{
	//console.log(req.query.num)
	setTimeout(()=>{ res.json({
			html:imgData

		})},0)
	
	})

app.listen(7001,()=>{console.log("serrver started")});