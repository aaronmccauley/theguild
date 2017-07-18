
$(document).ready(function(){
	var par=$(".mobile-nav");
	$(par).hide();
   $(".hamburger").click(function(){
       $(par).slideToggle('slow');
   });
});

$(document).ready(function(){
	var par=$(".reveal-mobile1 a");
	$(par).hide();
   $(".dropdown-mobile1").click(function(){
       $(par).slideToggle('slow');
   });
});

$(document).ready(function(){
	var par=$(".reveal-mobile2 a");
	$(par).hide();
   $(".dropdown-mobile2").click(function(){
       $(par).slideToggle('slow');
   });
});

$(document).ready(function(){
	var par=$(".reveal-mobile3 a");
	$(par).hide();
   $(".dropdown-mobile3").click(function(){
       $(par).slideToggle('slow');
   });
});

