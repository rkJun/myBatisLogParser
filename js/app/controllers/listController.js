tipJS.controller({
	name : "app.listController",
	async: true,


	sample : function () {
		var parserModel = this.loadModel("parserModel");
		var parserView = this.loadView("parserView");
		var sampleText = parserModel.getSampleText();
		parserView.set$txt_origin (sampleText);	
	},

	invoke : function( params ){

		//tipJS.log(this.name + " params:"+params);
		var parserModel = this.loadModel("parserModel");
		var parserView = this.loadView("parserView");
		
		var list = parserModel.getListParsedSQL();
		parserView.set$div_history(list);

		//parserView.set$span_cnt("");
		parserView.set$span_cnt(list.length);

	}
});
