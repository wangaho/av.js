av.project({
	
	name: "test",
	include: [
		"public/common.js",
		
		//设置模板
		{
			file: "page/test.html", 
			type: "text", 
			callback: function(data) {
		 		this.template(data);
			}
		},
		
	],
	extend: ["common"],
	data: function() {
		
		this.title = "这是test工程";
		this.a = "去home工程页面";
		this.clickNumber = function() {
			this.number ++;
		};
		
	}
});
