import terminal from 'jquery.terminal';
import commands from '../commands/commands';

class Terminal {
	constructor (opts) {
		var self = this;
		this.elm = opts.elm;

		self.terminal = this.elm.terminal(commands,{
			name: 'main',
			prompt: 'guest@jefftherobot:~$ ',
			onInit: function(term){
				commands.motd(term)
			},
			greetings: function(cb){
				cb(commands.greeting(true));
			}
		});
		(function loop() {
			var rand = Math.round(Math.random() * (60000 - 30000)) + 30000;

			setTimeout(function() {
				self.terminal.history().disable();
				self.terminal.exec('glitch', true);
				self.terminal.history().enable();
				loop();
				}, rand);
		}());


		return this;
	}
}

export default Terminal;
