import screenfull from 'screenfull';

export default function fullscreen(toggle) {

	if(toggle == "--enable"){
		if (screenfull.enabled) {
			screenfull.request();
		}
	}else if (toggle == "--disable"){
		if (screenfull.enabled) {
			screenfull.exit();
		}
	}

}