function refreshData()
{
	
    x = 1;  // x = seconds
 	var d = new Date()
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();
	
	
 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};
	
 	var	color = '#'+h+m+s;
	
	$(".wrapper.style4").css("background-color", color );
    $("#nav").css("background-color", color );
    $("#time").text(color);
	 
    setTimeout(refreshData, x*1000);
}
  
refreshData();
