$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        let hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 99
        }, 500);
        return false;
    });
});
$(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});
$(function () {
    $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });
});
const mybutton = document.getElementById("back-to-top");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 1500);
    document.documentElement.scrollTop = 0;
};