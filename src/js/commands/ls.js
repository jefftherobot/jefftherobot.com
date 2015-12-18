import fs from '../models/Github';

export default function ls() {
	var wd = fs.getCurrentWorkingDirectory();

	for(let i in wd) {
		if(typeof wd[i] == 'object') {
			var item = wd[i];
			//console.log(item)
			this.echo(item.mode+'\&nbsp;' + '[[;;;filesize;]'+(item.type!='tree'?item.size:0)+']\&nbsp;&nbsp;' + (item.type=='tree'?'[[;#A1B56C;]'+item.path+']':item.path));
		}
	}
}