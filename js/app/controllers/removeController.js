tipJS.controller({
	name : "app.removeController",
	async: true,

	beforeInvoke:function(){
		tipJS.debug(this.name + ".beforeInvoke");
	},
	invoke : function( params ){
		tipJS.log(this.name + " params:"+params);
		var parserModel = this.loadModel("parserModel");
		var parserView = this.loadView("parserView");

		if (params === "clear") {
			parserModel.clear();
		}
		parserModel.removeMaxParsedSQL();
	}
});
