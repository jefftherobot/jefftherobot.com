import voice from 'responsiveVoice';

export default function talk(what) {
	var person = "US English Female"; //http://responsivevoice.org/text-to-speech-languages/

	voice.responsiveVoice.setDefaultVoice(person);
	voice.responsiveVoice.speak(what)
}