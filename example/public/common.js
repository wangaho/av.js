av.project({
	
	name: "common",
	onPageChange: function(e) {
		console.log('onPageChange', e);
		if (confirm("这是common工程提醒，你确定要跳转页面么?")) {
			e.accept();
		} else {
			e.ignore();
		}
	},
	data: {
		
		number: 0,
		message: "这是common工程的消息",
		inputValue: "",
		inputChange: function(ele) {
			this.inputValue = ele.value;
		}
		
	}
	
	
	
});
