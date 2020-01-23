av.project({
	
	name: "home",
	include: [
		"public/common.js",
		
		//设置模板
		{
			file: "page/home.html", 
			type: "text", 
			callback: function(data) {
		 		this.template(data);
			}
		},
		
	],
	extend: ["common"],
	data: function() {
		
		this.title = "这是home工程";
		this.a = "去test工程页面";
		this.clickNumber = function() {
			this.number ++;
		};
		
	}
});