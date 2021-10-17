function Calcula() {
    var lado = document.getElementById('NumLado').value;
    lado = parseFloat(lado.replace(',', '.'));
    function area() {
        var mostrararea = parseFloat(lado) * parseFloat(lado);
        return mostrararea.toFixed(2);
    }
    function Soma() {
        sum = 0;
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        return sum.toFixed(2);
    }
    if (lado >= 1) {
        document.getElementById('ResultArea').innerHTML = ("L × L " + " ou L²" + "   =   " + area().replace('.', ',') + " m² ");
        document.getElementById('ResultPerimetro').innerHTML = ("L + L + L + L  =   " + Soma().replace('.', ',') + " m ");
    }
    else if (lado < 0) {
        document.getElementById('ResultArea').innerHTML = ("Error (negativo)");
        document.getElementById('ResultPerimetro').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultArea').innerHTML = ("Não existe/não foi inserido!");
        document.getElementById('ResultPerimetro').innerHTML = ("Não existe/não foi inserido!");
    }
}