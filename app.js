/*Mobile Menu Interactive Function*/

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


/* Submit Alert Function */

document.getElementById("submitb").onclick = function() {
    alert("Thank You For Your Question");
}; 


/* Blank Input Alert Function.... Could not get function to work... Under construction...

function validateForm(){
  var isValid = true;

  var elements = document.getElementsById('formlist').getElementsById('forminput');

  for(var i=0; i < elements.length; i++){
    if(elements[i].value.length < 1){
      isValid = false;
    }
  }

  if(isValid){
    document.getElementsById('forminput').submit();
  }
  else {
    alert('Please fill all required fields');
  }
} */
