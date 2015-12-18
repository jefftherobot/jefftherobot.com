import fs from '../models/Github';
import dialog from './dialog';

//https://api.github.com/repos/jefftherobot/jefftherobot.com/contents?ref=filesystem

export default function cat(file) {
	var _ = this,
	    dir = fs.stack,
	    api = fs.API_HOST + '/repos/' + fs.OWNER + '/' + fs.REPO + '/contents/';

	$.getJSON(api + dir +'/' + file + '?ref=filesystem', function(data, textStatus, jqXHR){
		if(isImage(data.download_url)){
			var imageData = {};
			    imageData.title=file
			    imageData.content='<img src="'+data.download_url+'">';
			dialog(imageData)
		}else{
			_.echo(readFile(data.content));
		}
	}).fail(function(data, textStatus, jqXHR){
		_.error("cat: " + file + ": No such file or directory");
	});
}

function readFile(content) {
	return atob(content);
}

function getMimeType(filename){
	if (filename.lastIndexOf(".") > 0) {
		return filename.substr(filename.lastIndexOf("."));
	}
}

function isImage(filename){
	return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(getMimeType(filename));
}