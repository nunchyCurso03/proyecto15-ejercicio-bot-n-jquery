 $(document).ready(function () {
    $("#boton1").click(function () {
        alert("Alguien ha pulsado el botón"); // alerta cuando se pulsa el botón
    });

    $("#boton2").click(function () {
        $(this).hide();  // botón desaparece al clickar
    });



    
    $("#boton3").click(function () {
        var nuevoBoton3= $('<button id="nuevoBoton3">¡Ta Ta Ta....chán!</button>');
        $("#nuevoBoton3Contenedor").append(nuevoBoton3);
    });


}); 

 


 