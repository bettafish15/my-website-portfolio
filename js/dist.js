$(document).ready(function () {
    $("#nav").sticky({ topSpacing: 0 });
    $(".menu-switch").click(function () {
        $("#site-navigation").toggleClass("open");
    });

    $("#nav-navigation a").click(function () {
        $("#nav-navigation a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });

});