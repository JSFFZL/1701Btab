var gulp = require("gulp");

var webserver = require("gulp-webserver");


gulp.task("ser",function(){
	return gulp.src("./src/")
	.pipe(webserver({
		open:true,
		port:8089,
		livereload:true,
		proxies:[
			{source:"/api/getDate",target:"http://localhost:3000/api/getDate"}
		]
	}))
})