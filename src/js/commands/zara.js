import talk from './talk';

export default function zara() {
	var mainTerm = this;

	this.push(function(request, term) {
		var response = 'Zara is coming soon...Here is what you said... '+request

		//getResponse(request)
		talk(response);
	}, {
	name: 'zara',
	prompt: 'zara> '});
}

function getResponse(whatinput){}

function parseResponse(){}