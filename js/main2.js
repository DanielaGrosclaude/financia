
document.getElementById("btnSubmit").addEventListener("click", datosForm);


//Formulario de contacto
function datosForm (){
    console.log("texto");
const formulario = document.getElementById ('form');

//VEO QUE NOMBRE Y APELLIDO SEAN VALIDOs?

function camposValidos (nombre, apellido, estado) {
    var nombre = $("#" + nombre);
    var apellido = $("#" + apellido);

    if (estado == "ok"){
        nombre.removeClass("is-invalid");
        nombre.addClass("is-valid");
        apellido.removeClass("invalid-feedback");
        apellido.addClass("valid-feedback");
    }
    else{ 
        nombre.removeClass("is-valid");
        nombre.addClass("is-invalid");
        apellido.removeClass("valid-feedback");
        apellido.addClass("invalid-feedback");
}
}

//fUNCION PARA QUE ME ELIGA POR DEFECTO BARRIO PALERMO 
function validarZona() {
    var zona = $("#zona");

    if (zona.val() == "Ciudad Autonoma de Buenos Aires"){
        $("#barrio").val("Palermo");
    }
    else {
        $("#barrio").val("");
    }

}

//FUNCION PARA QUE ME GUARDE LOS DATOS EN EL FORM 
function guardarDatosForm (){
    console.log("Guardo datos del formulario en el localStorage");
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var telefono = $("#telefono").val();
    var zona = $("#zona").val();
    var barrio = $("#barrio").val();
    var consulta = $("#consulta").val();

    localStorage.setItem("datosFormulario", JSON.stringify({nombre:nombre, apellido:apellido, telefono:telefono, zona:zona, barrio:barrio, consulta:consulta}));

}

function validarFormulario(){
    var nombre = $("#nombre");
    var textoNombre = $("#textoNombre");
    
    if (nombre.val() == ""){
        textoNombre.html("Ingresá un nombre válido");
        camposValidos("nombre", "textoNombre", "error");
        nombre.focus();
        return false; // Se detiene la validacion
    }
    else {
        textoNombre.html("Datos Validos!");
        camposValidos("nombre", "textoNombre", "ok");
    }

    var apellido = $("#apellido");
    var textoApellido = $("#textoApellido");

    if (apellido.val() == ""){
        textoApellido.html ("Ingrese un apellido válido");
        camposValidos("apellido", "textoApellido", "error" );
        apellido.focus();
        return false;
    }
    else {
        textoApellido.html("Datos Validos!");
        camposValidos("apellido", "textoApellido", "ok");
     }

     //HAGO LO MISMO CON TODOS LOS CAMPOS
     var email = $("#email");
    var textoEmail = $("#textoEmail");

    if (email.val() == ""){
        textoEmail.html ("Ingrese un email válido");
        camposValidos("email", "textoEmail", "error" );
        apellido.focus();
        return false;
    }
    else {
        textoEmail.html("Datos Validos!");
        camposValidos("email", "textoEmail", "ok");
     }

     //AHORA VALIDO TELEFONO
     var telefono = $("#telefono");
    var textoTelefono = $("#textoTelefono");

    if (telefono.val() == ""){
        textoTelefono.html ("Ingrese un telefono válido");
        camposValidos("telefono", "textoTelefono", "error" );
        telefono.focus();
        return false;
    }
    else {
        textoTelefono.html("Datos Validos!");
        camposValidos("telefono", "textoTelefono", "ok");
     }

     //AHORA VALIDO LA ZONA

     var zona = $("#zona");
    var textoZona = $("#textoZona");

    if (zona.val() == ""){
        textoZona.html ("Ingrese zona para continuar");
        camposValidos("zona", "textoZona", "error" );
        zona.focus();
        return false;
    }
    else {
        textoZona.html("Datos Validos!");
        camposValidos("zona", "textoZona", "ok");
     }

     //vALIDOs EL MENSAJE Y YA 

     var consulta = $("#consulta");
    var textoConsulta = $("#textoConsulta");

    if (consulta.val() == ""){
        textoConsulta.html ("Ingresa un mensaje para poder enviar!");
        camposValidos("consulta", "textoConsulta", "error" );
        consulta.focus();
        return false;
    }
    else {
        textoConsulta.html("Continuemos!");
        camposValidos("consulta", "textoConsulta", "ok");
     }

     var newsletter = $("#newsletter");
     var textoNewsletter =$("#textoNewsletter");

     if (!newsletter.is(':checked')){
         textoNewsletter.html("Gracias por suscribirte a nuestro newsletter, vas a estar recibiendo descuentos y novedades todas las semanas! ")
     camposValidos("newsletter", "textoNewsletter", "ok");
    }
  
    guardarDatosForm();
    $("#formulario_contacto").submit();
    console.log("Enviaste tu consulta! Pronto nos pondremos en contacto con vos :)");

}


    cargarZonas (zonas);

$("#enviar_form").click(function(){
    validarFormulario();
})

$("#nombre").focusout(function(){
    validarFormulario();
})
$("#apellido").focusout(function(){
    validarFormulario();
})
$("#email").focusout(function(){
    validarFormulario();
})
$("#telefono").focusout(function(){
    validarFormulario();
})
$("#zona").focusout(function(){
    validarFormulario();
})
$("#barrio").focusout(function(){
    validarFormulario();
})
$("#consulta").focusout(function(){
    validarFormulario();
})

}
//cargarFormulario();









var nombre = document.getElementById("inputNombre4").value;
var apellido = document.getElementById("inputApellido4").value;
var email = document.getElementById("inputEmail").value;
var telefono = document.getElementById("inputTelefono2").value;
var barrio = document.getElementById("inputBarrio").value; 
var calle = document.getElementById("inputCalle").value;
var numero = document.getElementById("inputNumero").value; 
localStorage.setItem("datosFormulario", JSON.stringify([nombre, apellido, email, telefono, barrio, calle, numero]));

function traerDatos (){
    var datosTipo = JSON.parse(localStorage.getItem("datosFormulario"));
    console.log(datosTipo);

    document.getElementById("inputNombre4").value = datosTipo [0];
    document.getElementById("inputApellido4").value = datosTipo  [1];
    document.getElementById("inputEmail").value = datosTipo  [2];
    document.getElementById("inputTelefono2").value = datosTipo  [3];
    document.getElementById("inputBarrio").value = datosTipo  [4];
    document.getElementById("inputCalle").value = datosTipo  [5];
    document.getElementById("inputNumero").value = datosTipo  [6];
}