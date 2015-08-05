import $ from 'jquery';
import Terminal from './models/Terminal';

class JeffTheRobot {

	constructor () {
		console.log('init site')

		this.terminal = new Terminal({
			elm: $('.terminal')
		});

	}
}

new JeffTheRobot();