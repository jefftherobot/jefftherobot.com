import 'jquery.storageapi';

var storage=$.localStorage;

export default function motd(term=this) {

	if(storage.isSet('proverb')){
		term.echo('"'+getProverb()+'"\n');
	}

	setProverb();
}

var getProverb = function(){
	return storage.get('proverb');
}

var setProverb = function(){
	$.get( "http://proverbs-app.antjan.us/random", function(data) {
		storage.set('proverb', data)
	});
}