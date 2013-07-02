tipJS.controller({
	name : "app.sampleController",
	async: true,
	invoke : function( params ){
		tipJS.log(this.name + " params:"+params);
		var parserModel = this.loadModel("parserModel");
		var parserView = this.loadView("parserView");
		var sampleText = parserModel.getSampleText();
		parserView.set$txt_origin (sampleText);	
	}
});
