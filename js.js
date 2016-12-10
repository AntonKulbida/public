// var now = new Date();
// var now1 = new Date(2016,08,01);

// var days = (now1 - now);

// var month = ["Jan","Feb","March","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
// var month_now = now.getMonth();

// document.write(parseInt(days / (1000 * 60 *60 * 24)));
// document.write("</br>");
// document.write(now.toLocaleString());
// document.write("</br>");
// document.write(month[now.getMonth()]);


// function get_clock() {
// 	var now;
// 	var hours,minutes,seconds;
// 	var result;
	
// 	now = new Date();
	
// 	hours = now.getHours();
// 	minutes = now.getMinutes();
// 	seconds = now.getSeconds();
	
// 	result = hours + " : " + minutes + " : " + seconds;
	
// 	document.getElementById("cl").innerHTML = result;
	
// 	setTimeout("get_clock()",1000);
	
// };

// get_clock();

var object = {
	x : 100
}
document.write(object.x);