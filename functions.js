function go_link(){
	window.location = document.getElementById('link').value;
}

// function annOff() {
//     $("[class=annotator-hl]").css("background" : "white");
// }

$('.annOff').click(function() {
    $(".annotator-hl").css("background", "white");
});