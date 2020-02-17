$(function () {

    $("main>ul>li>ul").hide();
    //$("#men").hide();

    $("main ul li>span").each(function(){
        $(this).click(function () {
           
            $(this).parent().find("ul").slideToggle();
          

        });

    });

    $("#hamb").click(function () {
        $("#men").slideToggle();
        
    });

    $(".alumno").each(function(){
        $(this).click(function(){

            $("#infoAlumno").show();
            $nombre = $(this).find(":nth-child(1)").text();
            $nota = $(this).find(":nth-child(2)").text();
           
            $("#infoAlumno").find("#nombre").text($nombre);
            $("#infoAlumno").find("#direccion").text("Calle Kalea");
            $("#infoAlumno").find("#nota").text($nota);
          
        
       
        });

    });

    $(".imgCerrar").click(function(){

        $("#infoAlumno").hide();
        $("#anadirTarea").hide();

    });

    $(".anadir").each(function(){
        $(this).click(function(){

            

            $("#anadirTarea").show();
            
    
        });

    });
});