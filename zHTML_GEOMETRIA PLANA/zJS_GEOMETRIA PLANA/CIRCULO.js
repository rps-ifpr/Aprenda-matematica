function Calcula() {
    var r = document.getElementById('Numr').value;
    var pi = 3.14;
    r = parseFloat(r.replace(',', '.'));
    function area() {
        var mostrararea = (parseFloat(pi) * parseFloat(r) ** 2);
        return mostrararea.toFixed(2);
    }
    function Circunferencia() {
        sum = 0;
        sum = 2 * parseFloat(pi) * parseFloat(r);
        return sum.toFixed(2);
    }
    function diametro() {
        var mostrardiametro = (2 * r);
        return mostrardiametro.toFixed(2);
    }
    if (r >= 1) {
        document.getElementById('ResultArea').innerHTML = ("pi × r² = " + area().replace('.', ',') + " m² ");
        document.getElementById('ResultD').innerHTML = ("2 × r  = " + diametro().replace('.', ',') + " m")
    }
    else if (r < 0) {
        document.getElementById('ResultArea').innerHTML = ("Error(negativo)");
        document.getElementById('ResultD').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultArea').innerHTML = ("Não existe/não foi inserido!");
        document.getElementById('ResultD').innerHTML = ("Error");
    }
    if (r >= 1) {
        document.getElementById('ResultPerimetro').innerHTML = ("2 × π × r = " + Circunferencia().replace('.', ',') + " m ");
    }
    else if (r < 0) {
        document.getElementById('ResultPerimetro').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultPerimetro').innerHTML = ("Não existe/não foi inserido!");
    }
}