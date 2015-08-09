import terminal from 'jquery.terminal';
import commands from '../commands/commands';

class Terminal {
	constructor (opts) {
		this.elm = opts.elm;

		this.elm.terminal(commands,{
			name: 'main',
			prompt: 'guest@jefftherobot:~$ ',
			onInit: function(term){
				commands.motd(term)
			},
			greetings: function(cb){
				cb(commands.greeting(true));
			},
		});

		return this;
	}
}

export default Terminal;
