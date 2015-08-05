import $ from 'jquery';
import Terminal from './models/Terminal';

class JeffTheRobot {

	constructor () {

		this.terminal = new Terminal({
			elm: $('.terminal')
		});

	}
}

new JeffTheRobot();