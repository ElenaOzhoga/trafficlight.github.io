(function() {
	setInterval( function(){
		var redCircle = $($(".circle")[0]);
		var yellowCircle = $($(".circle")[1]);
		var greenCircle = $($(".circle")[2]);
		if (!yellowCircle.hasClass("yellow") && !greenCircle.hasClass("green")) {
			redCircle.toggleClass("red");
		}
		if (!redCircle.hasClass("red") && !greenCircle.hasClass("green")) {
			yellowCircle.toggleClass("yellow");
		}
		if (!yellowCircle.hasClass("yellow") && !redCircle.hasClass("red")) {
			greenCircle.toggleClass("green");
		}
	}, 1500);
})();