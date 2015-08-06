export default function help() {

var message = [

	'Welcome to [[;#AB4642;]Jeff OS (JOS)]',
	'\r',
	'COMMANDS',
	'    [[;#A1B56C;]help] shows this menu',
	'    [[;#A1B56C;]greeting] shows the greeting message',
	'    [[;#A1B56C;]motd] shows a programmer quote from https://github.com/AntJanus/programmers-proverbs',
].join('\n');
	this.echo('\n'+message+'\n')
}