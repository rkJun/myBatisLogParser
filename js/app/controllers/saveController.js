tipJS.controller({
	name : "app.saveController",
	async: true,

	beforeInvoke:function(){
		tipJS.debug(this.name + ".beforeInvoke");
	},
	isValid: function(parsedSql) {

		if ( false ) {
			return false;
		}

		return true;
	},

	invoke : function( params ){
		var parserModel = this.loadModel("parserModel");
		var parserView = this.loadView("parserView");

		var maxKey = parserModel.getMaxKey();
		var parsedSql = parserView.get$txt_parsing().val();

		if ( !this.isValid(parsedSql) ) {
			return false;
		}

		parserModel.setParsedSQL(maxKey, parsedSql);
	}
});
