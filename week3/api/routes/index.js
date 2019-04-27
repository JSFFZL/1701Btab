var express = require('express');
var router = express.Router();
var mongo = require("mongodb-curd");

var db = "1701bweek3";
var col = "tabList";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/*  */
router.post('/api/getDate', function(req, res, next) {
	var tab = req.body.style;
  mongo.find(db,col,{"style":tab},function(result){
		if(!result){
			res.json({code:0,msg:"查询失败"})
		}else{
			res.json({code:1,msg:"查询成功",data:result})
		}
	})
});



module.exports = router;
