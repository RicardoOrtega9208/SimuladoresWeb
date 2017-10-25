function ValidateNumber(pcontrol) {
    pcontrol.on('keyup', function () {

        var key = event.keyCode || event.charCode;

        if (key == 8 || key == 46)
            return false;

        if ($(this).val().match(/\D/g, '')) {
            showErrorModal("Solo son permitidos numeros en este campo");
            $(this).val("0");
        }
    });
}

function ToDecimalonBlur(pcontrol) {
    pcontrol.on('blur', function () {
        var n = parseInt($(this).val().replace(/\D/g, ''), 10);
        $(this).val(n.toLocaleString());
    });
}


function construirTableHTML(pcontrol, data) {
    var stringHtml = "";
    if (data.hasOwnProperty("list")) {
        var plista = data["list"];
        stringHtml += "<table id=\"divtblresult\" class=\"table table-striped table-bordered table-hover table-responsive\">";
        stringHtml += "<thead class=\"thead-inverse\">"
        stringHtml += "<tr>";
        if (plista.length > 0) {
            for (var head in plista[0]) {
                stringHtml += "<th>" + head + "</th>";
            }
        }
        stringHtml += "</tr>";
        stringHtml += "</thead>";
        stringHtml += "<tbody>"

        var plista = data["list"];
        for (var i = 0; i < plista.length; i++) {
            stringHtml += "<tr>";
            for (var element in plista[i]) {
                if (element.toUpperCase() != "TASANMV") {
                    var val = plista[i][element];
                    var n = parseInt(val, 10);
                    stringHtml += "<td>" + n.toLocaleString() + "</td>";
                } else {
                    stringHtml += "<td>" + plista[i][element] + "</td>";
                }
            }
            stringHtml += "</tr>";
        }
        stringHtml += "</tbody>"
        stringHtml += "</table>";
    }

    stringHtml += "<table id=\"tbltotales\" class=\"table table-striped table-hover table-responsive\">";

    var totales = data["Totales"];
    for (var entry in totales) {
        stringHtml += "<tr>";
        stringHtml += "<td>" + entry.toString().replace(/\_/g, ' ') + "</td>";
        if (entry.toUpperCase() == "TASA_EA" || entry.toUpperCase() == "TASA_NOMINAL_ANUAL") {
            stringHtml += "<td>" + totales[entry] + "%  </td>";
        } else {
            var v = parseInt(totales[entry], 10);
            stringHtml += "<td>" + v.toLocaleString() + "</td>";
        }

        stringHtml += "</tr>";
    }
    stringHtml += "</table>";



    pcontrol.append(stringHtml);
}

function contruirErrorMessage(pcontrolmsn) {
    var stringHtml = "<h1 class=\"display-4\">Algo salio mal</h1>";
    stringHtml += "<blockquote class=\"blockquote\">";
    stringHtml += "<p class=\"mb-0\">Algo falló, lo sentimos, contáctanos por nuestros otros canales para brindarte mas informacion acerca de nuestros productos</p>";
    stringHtml += "</blockquote>"
    pcontrolmsn.append(stringHtml);
}


function showErrorModal(pmensaje) {
    $("#errormsn").html(pmensaje);
    $("#ErrorModalDialog").modal("show");
}