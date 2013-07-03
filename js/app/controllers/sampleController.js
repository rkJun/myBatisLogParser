tipJS.controller({
	name : "app.sampleController",
	async: true,
	invoke : function( params ){
		//tipJS.log(this.name + " params:"+params);
		var sampleText = this.loadModel("parserModel").getSampleText();
		this.loadView("parserView").set$txt_origin(sampleText);	
	}
});
