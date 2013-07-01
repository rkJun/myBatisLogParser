tipJS.controller({
	name : "app.parserController",
	async: true,

	beforeInvoke:function(){
		tipJS.debug(this.name + ".beforeInvoke");
	},
	
	parse : function ( params ) {

		var parserModel = this.loadModel("parserModel");
		var parserView = this.loadView("parserView");

		var i=0, lastIdx = 0;

		var $txt_origin = parserView.get$txt_origin();
		var $txt_parsing = parserView.get$txt_parsing();

		var originArr = [], parsingArr = [], paramArr = [];
		var paramCnt = 0;
		var result = "";
		var preparing = "";
		var param = {};

		originArr = $txt_origin.val().split("\n");
		parsingArr[0] = originArr[0].substring ( originArr[0].indexOf ("Preparing: ")+11 );
		parsingArr[1] = originArr[1].substring ( originArr[1].indexOf ("Parameters: ")+12 );

		if (originArr.length > 2) {
			for (i =2; i < originArr.length; i++ ) {
				parsingArr[1] += originArr[i];
			}
		}
		preparing  = parsingArr[0];
		paramArr = parsingArr[1].split(",");
		console.log("paramArr:"+paramArr);
		for (i = 0; i < paramArr.length; i++) {
			var tempParams = paramArr[i];
			lastIdx = tempParams.lastIndexOf("(");

			param.val = $.trim ( tempParams.substring(0, lastIdx ) );

			if (lastIdx < 0) {
				param.val  = "null";
			}

			param.typ = tempParams.substring(tempParams.lastIndexOf("(")+1, paramArr[i].lastIndexOf(")"));

			if ( preparing.indexOf("?") >= 0 ) {

				if (param.typ === "String") {
					param.val = "'"+param.val+"'";
				}
				preparing = preparing.replace("?", param.val);
			}

		}
		result = preparing;
		$txt_parsing.html(result);

	},

	save : function ( params ) {

	},

	remove : function ( params ) {

	},

	list : function ( params ) {

	},

	sample : function ( params ) {
		var parserModel = this.loadModel("parserModel");
		var parserView = this.loadView("parserView");
		var sampleText = parserModel.getSampleText();
		parserView.set$txt_origin (sampleText);	
	},

	invoke : function( params ){

		tipJS.log(this.name + " params:"+params);
		
		var actName = params;

		switch (actName) {
			case "parse":
				this.parse();
			break;
			case "sample":
				this.sample();
			break;
			case "save":
			alert("save");
			break;
			case "remove":
			alert("remove");
			break;
			case "list":
			alert("list");
			break;
		}

	   // var _templateConfig = {
    //         url:"/examples/helloWorldTpl/templates/helloWorld.tpl",
    //         renderTo:"contents",
    //         data:{
    //             helloworld:"Hello World from " + params
    //         }
    //     };
    //     this.renderTemplate(_templateConfig);

/*
		var globalTodos = this.loadModel("globalTodos", true),
			utils = this.loadModel("utils"),
			$input = params.input,
			e = params.event,
			val = $.trim( $input.val() );

		if ( e.which !== globalTodos.ENTER_KEY || !val ) {
			return;
		}
		globalTodos.todos.push({
			id: utils.uuid(),
			title: val,
			completed: false
		});
		$input.val('');
		*/
		//this.loadView("renderer").updateView( globalTodos );
		//this.loadModel("utils").store( globalTodos.STORE_KEY, globalTodos.todos );
	}
});
