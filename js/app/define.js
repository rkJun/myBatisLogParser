tipJS.define({
	noCache:true,
	//noCacheVersion:"1.00",
	noCacheParam:"tipJS",
	noCacheAuto:true,
	name:"app",
	controllers:[
		"initController.js",
		"parseController.js",
		"saveController.js",
		"removeController.js",
		"listController.js",
		"sampleController.js"
		// "insert.js",
		// "delete.js",
		// "list.js",
		// "listCount.js"
	],
	models:[
		"parserModel.js"
	],
	views:[
		"parserView.js"
	],
	onLoad:function(params){
		tipJS.action.app.initController();
	}
});

