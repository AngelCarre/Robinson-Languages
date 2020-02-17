$(function () {

    $("main>ul>li>ul").hide();
    //$("#men").hide();

    $("main ul li>span").each(function(){
        $(this).click(function () {
           
            $(this).parent().find("ul").slideToggle();
          

        });

    });

    $("#men").hide();

    $("#hamb").click(function () {
        $("#men").slideToggle();
        // $("#hamb").css("position", "absolute");
        // $("#hamb").css("top", "100px");
        // $("#hamb").css("right", "0");
        
    });

});