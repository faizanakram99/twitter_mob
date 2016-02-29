$(document).ready(function () {
    $(".search").click(function () {
        $(".searchbox").toggleClass("none");
        $(".main-header a").toggleClass("none");
        $(".main-header span").toggleClass("none");
        $(".main-nav").toggleClass("none");
        $(".main-content").toggleClass("none");
        $("body").css("background", "#eee");
    });

    $(".searchbox img").click(function () {
        $(".searchbox").toggleClass("none");
        $(".main-header a").toggleClass("none");
        $(".main-header span").toggleClass("none");
        $(".main-nav").toggleClass("none");
        $(".main-content").toggleClass("none");
        $("body").css("background", "inherit");
    });

    $(".new_tweet").click(function () {
        $(".tweet").toggleClass("none");
        $("header.main-header").toggleClass("none");
        $(".main-nav").toggleClass("none");
        $(".main-content").toggleClass("none");
    });

    $(".cancel").click(function () {
        $(".tweet").toggleClass("none");
        $("header.main-header").toggleClass("none");
        $(".main-nav").toggleClass("none");
        $(".main-content").toggleClass("none");
    });



});
