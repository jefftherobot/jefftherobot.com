//import voice from 'responsiveVoice';

export default function talk(what) {

	var api_url = "https://zara-speech.mybluemix.net/api/synthesize",
	    voice   = "en-GB_KateVoice";

	var downloadURL = api_url +
	    '?voice=' + voice +
	    '&text=' + encodeURIComponent(what)

	var audio = new Audio(downloadURL);
	audio.play();
}