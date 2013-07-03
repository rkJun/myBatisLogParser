tipJS.controller({
	name : "app.initController",

	invoke : function(){
		$("#defaultForm").submit(function(e) {
			e.preventDefault();
		});

		$("#div_button_list")
		.on("click", "button", function(e) {
			var btnActName = $(this).attr("id").substring(4);

			if (btnActName === "clear") {
				tipJS.action("app.removeController", "clear");
			}else {
				tipJS.action("app."+btnActName+"Controller");
			}
		});
	}
});
