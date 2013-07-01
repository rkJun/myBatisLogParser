tipJS.view({
    // choose an attribute data between name or __name
    name:"app.parserView",

    get$txt_origin : function(){
    	return $("#txt_origin");
    },
    get$txt_parsing : function(){
    	return $("#txt_parsing");
    },
    set$txt_origin : function(param){
    	return $("#txt_origin").val(param);
    },
    set$txt_parsing : function(param){
    	return $("#txt_parsing").val(param);
    }

});