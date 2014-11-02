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

function annOff() {
    $("[class=annotator-hl]").css("background-color","white").toggle();
}
