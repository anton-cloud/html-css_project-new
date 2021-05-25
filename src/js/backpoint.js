$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#backpoint').fadeIn();
    } else {
        $('#backpoint').fadeOut();
    }
});
$(document).ready(function () {
    $("#backpoint").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});