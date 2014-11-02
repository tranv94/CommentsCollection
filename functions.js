function go_link(){
	window.location = document.getElementById('link').value;
}

// function annOff() {
//     $("class=annotator-hl").css("background", "black");
// }
$(document).ready(function(){
   $('button').click(function(){
       $('.annotator-hl').toggleClass('uber');
   });
});