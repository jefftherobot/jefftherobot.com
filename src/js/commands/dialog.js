import kendo from 'kendo-ui';
import 'kendo-ui/styles/kendo.common.min.css!';
//import 'kendo-ui/styles/kendo.default.min.css!';

//http://docs.telerik.com/kendo-ui/web/window/overview
//http://docs.telerik.com/kendo-ui/api/javascript/ui/window

export default function dialog(what) {
	$('body').append('<div class="dialog">'+what+'</div>');

		var dialog = $(".dialog").kendoWindow({
			actions: ["Minimize", "Maximize", "Close"],
			animation: false,
			navigatable : false,
			height: 90,
			width: 400,
			minWidth: 400,
			minHeight: 90,
			title: '16 bit MS-DOS Subsystem',
		}).data("kendoWindow").center().restore();
}