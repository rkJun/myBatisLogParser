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
		var parsedSql = this.loadView("parserView").get$txt_parsing().val();

		if ( !this.isValid(parsedSql) ) {
			return false;
		}
		var parserModel = this.loadModel("parserModel");
		var maxKey = parserModel.getMaxKey();
		parserModel.setParsedSQL(maxKey, parsedSql);
	}
});
