$(document).ready(function () {
    $("#boton1").click(function () {
        alert("Alguien ha pulsado el botón"); // alerta cuando se pulsa el botón
    });

    $("#boton2").click(function () {
        $(this).hide();  // botón desaparece al clickar
    });




    $("#boton3").click(function () {
        let nuevoBoton3 = $('<button id="nuevoBoton3">¡Ta Ta Ta....chán!</button>');
        $("#nuevoBoton3Contenedor").append(nuevoBoton3);
    });




    $("#boton4").click(function () {
        let hdsMiembros = [{
            "nombre": "Enrique Bunbury",
        }, {
            "nombre": "Juan Valdivia",
        }, {
            "nombre": "Pedro Andreu",
        }, {
            "nombre": "Joaquín Cardiel",
        }];

        for (i = 0 ; i < hdsMiembros.length; i++ ) {
            $("#heroesDelSilencioLista").append(
                $("<li>")
                    .text(hdsMiembros[i].nombre)                                      
            );
        }

    });





});




