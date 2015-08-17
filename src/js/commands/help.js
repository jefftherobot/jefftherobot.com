export default function help() {

var message = [

	'Welcome to [[;#AB4642;]Jeff OS (JOS)]!',
	'This is a UNIX - like simulated terminal with little but of MS-DOS and Windows 98 mixed in for fun.',
	'\r',
	'SOME COMMANDS',
	'    [[;#A1B56C;]help].....................Shows this menu',
	'    [[;#A1B56C;]greeting].................Shows the greeting message',
	'    [[;#A1B56C;]motd].....................Shows a programmer quote',
/*	'    [[;#A1B56C;]run] Takes one parameter',
	'    [[;#A1B56C;]fullscreen]',
	'        [[;#F7CA88;]--enable] Go fullscreen ',
	'        [[;#F7CA88;]--disable] Exit fullscreen ',*/
].join('\n');
	this.echo('\n'+message+'\n')
}