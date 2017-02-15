var cabbage; 
window.onload = function(){
	$(document).ready(function(){
		cabbage = function(){
			$(document.body).append("<div class=\"cab\"><img src=\"CabbageMan.png\"/></div>");

			setInterval(function(){
				var cabs = $(".cab1").toArray(); 
				for(var i = 0; i<cabs.length; i++){
					var str = $(cabs[i]).css("left");
					var num = Number(str.substring(0, str.length - 2));  


					var strY = $(cabs[i]).css("top");
					var numY = Number(str.substring(0, str.length - 2));  
					var mag = (Math.random() -.5); 
					var newY = numY + (mag *50); 

					$(cabs[i]).css("left", (num+50)+"px").css("top", newY + "px"); 


				}
				$(document.body).append("<div class=\"cab1\"><img src=\"CabbageSmall2.png\"/></div>"); 
			}, 50)


		}
	}); 
}