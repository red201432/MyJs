(function() {
    // other code
   $(document).scroll(
   		function(){
   			if($(document).scrollTop()>80){
   				$("header nav").addClass('navbar-opacity').addClass('navbar-fixed-top');
   			}else{
   				$("header nav").removeClass('navbar-fixed-top').removeClass('navbar-opacity');
   			}
   		}
   	);
   $("header nav").on("mouseover",function(){
   		$(this).removeClass('navbar-opacity');
   }).on("mouseout",function(){
   		$(this).addClass('navbar-opacity');
   });
}());