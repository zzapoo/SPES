/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    
//    $("#menu").hide();
//    $( window ).scroll(function() {
//        $( "#menu" ).fadeIn(1000);
//    });

    $(document).scroll(stick);
});

function stick(){
    coordenadas = $("#menu")[0].getBoundingClientRect();
    if(coordenadas.y == 0){
        $("#menu").addClass("fixed");
    }
}
