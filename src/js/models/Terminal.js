import terminal from 'jquery.terminal';
import commands from '../commands/commands';

class Terminal {
	constructor (opts) {
		this.elm = opts.elm;

		this.elm.terminal(commands,{
			name: 'main',
			prompt: 'guest@jefftherobot:~$ ',
			greetings: function(cb){
				cb(commands.motd(true));
			},
		});

		return this;
	}
}

export default Terminal;