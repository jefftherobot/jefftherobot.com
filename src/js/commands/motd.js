export default function motd(term=this) {
	var message;

	term.pause();

	$.getJSON('http://anyorigin.com/dev/get?url=http%3A//proverbs-app.antjan.us/random&callback=?', function(data){
		message = data.contents;
		term.resume();
		term.echo('"'+message+'"\n');
	});
}