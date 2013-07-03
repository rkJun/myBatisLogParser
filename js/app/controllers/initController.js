tipJS.controller({
	name : "app.initController",

	beforeClickHandler : function () {
		var parserView = this.loadView("parserView");
		parserView.set$div_alertType("");
		parserView.set$div_alertMsg("");
		parserView.get$class_alert().hide();
	},
	invoke : function(){

		var superThis = this;
		$("#defaultForm").submit(function(e) {
			e.preventDefault();
		});

		$("#div_button_list")
		.on("click", "button", function(e) {
			superThis.beforeClickHandler();
			var btnActName = $(this).attr("id").substring(4);

			if (btnActName === "clear") {
				tipJS.action("app.removeController", "clear");
			}else {
				tipJS.action("app."+btnActName+"Controller");
			}
		});
	}
});
