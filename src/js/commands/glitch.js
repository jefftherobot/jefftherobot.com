import 'html2canvas';
import 'glitch';

export default function glitch() {
	$(".terminal").glitch({
		amount: 8,
		complete: function(canvas){

			$('body').append($('<div class="glitch">').css({
				position: 'absolute',
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				overflow: "hidden"
			}).append(canvas));

			setTimeout(function(){
				$('.glitch').remove();
			},Math.floor((Math.random() * 500) + 100))
		}
	})

}