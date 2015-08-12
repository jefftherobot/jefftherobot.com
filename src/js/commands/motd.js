import 'jquery.storageapi';

var storage=$.localStorage;

export default function motd(term=this) {

	if(storage.isSet('proverbs')){
		term.echo('"'+getRandomProverb()+'"\n');
	}

	saveProverbs();


	/*$.getJSON('http://anyorigin.com/dev/get?url=http%3A//proverbs-app.antjan.us/random&callback=?', function(data){
		message = data.contents;
		term
		.resume()
		.echo('"'+message+'"\n');
	});*/
}

var getRandomProverb = function(){
	var proverbs = storage.get('proverbs')
	return proverbs[Math.floor((Math.random()*proverbs.length))]
}

var saveProverbs = function(){
	$.getJSON('http://anyorigin.com/dev/get?url=http%3A//proverbs-app.antjan.us&callback=?', function(data){
		storage.set('proverbs', data.contents)
	});
}