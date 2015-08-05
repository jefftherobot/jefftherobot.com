import terminal from 'jquery.terminal';

class Terminal {
	constructor (opts) {
		this.elm = opts.elm;

		this.elm.terminal(function(cmd, term){
			console.log(cmd)
		},
		{
			greetings: 'Welcome!\n',
			name: 'main',
			prompt: 'guest@jefftherobot$ '
		});

		return this;
	}
}

export default Terminal;