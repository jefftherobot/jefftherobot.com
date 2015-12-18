import fs from '../models/Github';

//https://api.github.com/repos/jefftherobot/jefftherobot.com/contents?ref=filesystem

export default function cat(file) {
	var _ = this,
	    dir = fs.stack,
	    api = fs.API_HOST + '/repos/' + fs.OWNER + '/' + fs.REPO + '/contents/';

	$.getJSON(api + dir +'/' + file + '?ref=filesystem', function(data, textStatus, jqXHR){
		//console.log(data)
		_.echo(readFile(data.content));
	}).fail(function(data, textStatus, jqXHR){
		_.error("cat: " + file + ": No such file or directory");
	});
}

function readFile(content) {
	return atob(content);
}