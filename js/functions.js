$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".header").slideDown();
    } else {
        $(".header").slideUp();
    }
    this.previousTop = currentTop;
});

// function annOff() {
//     $("[class=annotator-hl]").css("background","white");
// }

// $(function(){
//     $('button').on('click', function(){
//         $('.annotator-hl').toggleClass('annotator-hl')
//     });
// });
$(document).ready(function(){
   $('button').click(function(){
       $('.annotator-hl').toggleClass('uber');
   });
});