tipJS.model({
	__name : "app.parserModel",
	sampleText: "",
	getSampleText : function(){
		tipJS.debug("parseModel.getSampleText()");
		this.sampleText = "DEBUG: java.sql.Connection - ==>  Preparing: SELECT TEST1, TEST2 FROM DUAL WHERE COL1 = ? AND COL2 = ? AND NO = ?";
		this.sampleText += "\nDEBUG: java.sql.PreparedStatement - ==> Parameters: test1(String), test2(String), 13(Long)";
		
		return this.sampleText;
	}
});