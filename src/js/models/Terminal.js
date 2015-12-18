import terminal from 'jquery.terminal';
import commands from '../commands/commands';
import glitch from '../commands/glitch';
import fs from '../models/Github';

class Terminal {
	constructor (opts) {
		var _ = this;
		_.elm = opts.elm;
		_.e = 'guest@jefftherobot'

		_.terminal = _.elm.terminal(commands,{
			name: 'main',
			onInit: function(term){
				commands.motd(term)
			},
			greetings: function(cb){
				cb(commands.greeting(true));
			},
			prompt: function(p){
				var path = '~'
				if(fs.stack.length > 0) {
					for(let i in fs.stack) {
						path+= '/';
						path+= fs.stack[i]
					}
				}
				p(_.e + ":" + path + "# ");
			}
		});

		(function loop() {
			var rand = Math.round(Math.random() * (60000 - 30000)) + 30000;

			setTimeout(function() {
				glitch()
				loop();
				}, rand);
		}());


		return this;
	}
}

export default Terminal;
