import fs from '../models/Github';

export default function ls() {
	var wd = fs.getCurrentWorkingDirectory();

	for(let i in wd) {
		if(typeof wd[i] == 'object') {
			var item = wd[i];
			this.echo(item.mode+'\t' + (item.type=='tree'?'[[;#A1B56C;]'+item.path+']':item.path));
		}
	}
}