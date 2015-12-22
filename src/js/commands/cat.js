import fs from '../models/Github';
import binaryExts from '../utils/binary-extensions';
import dialog from './dialog';

//https://api.github.com/repos/jefftherobot/jefftherobot.com/contents?ref=filesystem

export default function cat(file) {

	var isBinary = binaryExts.findIndex(x => x === getExt(file).slice(1).toLowerCase())!=-1?true:false;

	var term = this,
      dir = fs.stack,
      api = fs.API_HOST + '/repos/' + fs.OWNER + '/' + fs.REPO + '/contents/';

	term.pause();

	$.getJSON(api + dir +'/' + file + '?ref=filesystem', function(data, textStatus, jqXHR){
		console.log(data)
		var content = data.content.trim();
		if(data.encoding == 'base64'){
			content = atob(content);
		}
		if(isBinary){
			var dialogData = {};
			    dialogData.title=file
			    dialogData.content='<img src="'+data.download_url+'">';

			dialog(dialogData)

		}else{
			term.echo(content);
		}

		term.resume();

	}).fail(function(data, textStatus, jqXHR){
		_.error("cat: " + file + ": No such file or directory");
	});
}

function getExt(filename){
	if (filename.lastIndexOf(".") > 0) {
		return filename.substr(filename.lastIndexOf("."));
	}
}