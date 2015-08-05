export default function motd(initial=false) {
	var message = 'a message of the day';

	if(initial){
		return message;
	}else{
		this.echo(message)
	}
}