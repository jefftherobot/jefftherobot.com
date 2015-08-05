export default function motd(initial=false) {
	var message = 'A message of the day';

	if(initial){
		return message+"\n";
	}else{
		this.echo(message+"\n")
	}
}