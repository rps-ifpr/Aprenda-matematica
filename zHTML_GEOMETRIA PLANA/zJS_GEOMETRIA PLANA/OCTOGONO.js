function Calcula() {
    var lado = document.getElementById('NumLado').value.replace(',', '.');
    var a = document.getElementById('Apotema').value.replace(',', '.');
    function Soma() {
        sum = 0;
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        return sum.toFixed(2);
    }
    function area() {
        var mostrararea = (parseFloat(Soma()) * parseFloat(a)) / 2;
        return mostrararea.toFixed(2);
    }
    if (lado >= 1 && a >= 1) {
        document.getElementById('ResultArea').innerHTML = ("( 8 × L × Apótema ) / 2 = " + area().replace('.', ',') + " m² ");
    }
    else if (lado < 0 || a < 0) {
        document.getElementById('ResultArea').innerHTML = ("Error(negativo)");
    }
    else {
        document.getElementById('ResultArea').innerHTML = ("Não existe/não foi inserido!");
    }

    if (lado >= 1) {
        document.getElementById('ResultPerimetro').innerHTML = ("L + L + L + L + L + L + L + L =   " + Soma().replace('.', ',') + " m ");
    }
    else if (lado < 0) {
        document.getElementById('ResultPerimetro').innerHTML = ("Error(negativo)");
    }
    else {
        document.getElementById('ResultPerimetro').innerHTML = ("Não existe/não foi inserido!");
    }
}