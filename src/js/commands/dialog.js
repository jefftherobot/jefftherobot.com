import kendo from 'kendo-ui/src/js/kendo.window';
import 'kendo-ui/styles/kendo.common.min.css!';
//import 'kendo-ui/styles/kendo.default.min.css!';

//http://docs.telerik.com/kendo-ui/web/window/overview
//http://docs.telerik.com/kendo-ui/api/javascript/ui/window

export default function dialog(data) {
	//  dialog '{ "content": "An application attempted to directly access the hard disk, which cannot be supported", "title": "test" }'
	//var data = $.parseJSON(what);

	//console.log('title: '+data.title);

	$('body').append('<div class="dialog">'+data.content+'</div>');

	var dialog = $(".dialog").kendoWindow({
		actions: ["Minimize", "Maximize", "Close"],
		animation: false,
		navigatable : false,
		height: 90,
		width: 400,
		minWidth: 400,
		minHeight: 90,
		title: data.title || '16 bit MS-DOS Subsystem',
	}).data("kendoWindow").center().restore();
}