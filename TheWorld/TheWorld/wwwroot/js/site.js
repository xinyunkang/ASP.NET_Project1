//site.js
(function () {
    var userName = $("#username");
    userName.text("Bayern Kang");

    var main = $("#main");
    main.on("mouseenter", function () {
        main.style = "backgroundColor : #888;";
    });

    main.on("mouseleave", function () {
        main.style = "";
    });

    var menuItem = $("ul.menu li a");
    menuItem.on("click", function () {
        var me = $(this);
        alert(me.text());
        
    })
})();