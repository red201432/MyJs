// $(document).ready(function(){
// 	  $('.boxgrid').hover(function(){
// 	  	// $(".car").on("click",function(){
// 	  	$(".car").animate({left:'300px'},{duration:3000});
// 		function fu(){
// 			$(".car").animate({left:'100px'},{duration:3000});

// 		}
// 		  setTimeout(fu(),5000);
// 	  });
// 	  $(".car").on("click",function() {
// 		  $(".car").animate({left:'720px'},{duration:3000});
// 	  });
// });
/*
	对jQuery方法进行扩展的示例
*/
(function($){
	$.fn.PartCat=function(left,duration){
		var e=this;
		this.hover(function(){
			e.animate({left:left+'px'},{duration:duration});	
		})}
})(jQuery)

// $(".car").PartCat();
$(document.getElementById("car")).PartCat(100,3000);
