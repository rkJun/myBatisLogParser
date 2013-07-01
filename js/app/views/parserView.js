tipJS.view({
    // choose an attribute data between name or __name
    name:"app.parserView",

    get$txt_origin : function(){
    	return $("#txt_origin");
    },
    get$txt_parsing : function(){
    	return $("#txt_parsing");
    },
    get$div_history : function(){
        return $("#div_history");
    },
    get$span_cnt : function() {
        return $("#span_cnt");
    },
    set$txt_origin : function(param){
    	return $("#txt_origin").val(param);
    },
    set$txt_parsing : function(param){
    	return $("#txt_parsing").val(param);
    },
    set$div_history : function(param){
        return $("#div_history").html(param);
    },
    set$span_cnt : function(param) {

       if ( param == "" || param == null ) {
           return $("#span_cnt").html("");
       }

       var _templateConfig = {
            url:"js/app/tpl/parseTpl.html",
            //renderTo:"span_cnt",
            data: param
        };
        $("#span_cnt").html ( this.renderTemplate(_templateConfig) );
    }


});