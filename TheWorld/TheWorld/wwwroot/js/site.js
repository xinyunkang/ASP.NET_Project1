//site.js
(function () {
    //var userName = $("#username");
    //userName.text("Bayern Kang");

    //var main = $("#main");
    //main.on("mouseenter", function () {
    //    main.style = "backgroundColor : #888;";
    //});

    //main.on("mouseleave", function () {
    //    main.style = "";
    //});

    //var menuItem = $("ul.menu li a");
    //menuItem.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
        
    //})

    var $sidebarAndWrapper = $("#sidebar,#wrapper");

    var $icon = $("#sidebarToggle i.fa");


    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }
    })

})();