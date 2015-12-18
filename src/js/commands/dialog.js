import kendo from 'kendo-ui/src/js/kendo.window';
import 'kendo-ui/styles/kendo.common.min.css!';
//import 'kendo-ui/styles/kendo.default.min.css!';

//http://docs.telerik.com/kendo-ui/web/window/overview
//http://docs.telerik.com/kendo-ui/api/javascript/ui/window

export default function dialog(data) {

	$('body').append('<div class="dialog">'+data.content+'</div>');

	var dialog = $(".dialog").kendoWindow({
		actions: ["Minimize", "Maximize", "Close"],
		animation: false,
		navigatable : false,
		minWidth: 400,
		minHeight: 90,
		title: data.title || '16 bit MS-DOS Subsystem',
		close: function(e){ dialog.destroy(); }
	}).data("kendoWindow").center().restore();
}