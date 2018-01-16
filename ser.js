const currDir = './myFolder';
const fs = require('fs');
const path=require('path');
var func1=(dir1,cb)=>fs.readdir(dir1, (err, files) => {
	//console.log("first",dir1);
	var totalFiles=[];
  files.forEach(file => {
		//console.log(path.join(dir1,file));
		//console.log(dir1+"/"+file);
		totalFiles.push(dir1+"/"+file);
		if(fs.statSync(path.join(dir1,file)).isDirectory()){
			func1(path.join(dir1,file))
		}
})
//console.log("minee");
cb(totalFiles);
//console.log(totalFiles)

})


exports.func1=func1;


/* func1(currDir,(res)=>{
	
	console.log(res);
}); */




