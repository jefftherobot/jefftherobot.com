import fs from '../models/Github';

export default function cd(path) {
	var wd = fs.getCurrentWorkingDirectory();

 if(path == '..'){
		fs.stack.pop();
		return;
	}
	var wd = fs.getCurrentWorkingDirectory();
	var item = wd[path];

	if(!item) {
		this.error("cd: " + path + ": No such file or directory");
	}else if(item.type != 'tree'){
		this.error("cd: " + path  + ": Not a directory");
	}else{
		fs.stack.push(path);
	}
}