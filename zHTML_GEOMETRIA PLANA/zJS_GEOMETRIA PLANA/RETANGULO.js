function Calcula() {
    var base = document.getElementById('NumBase').value.replace(',', '.');
    var altura = document.getElementById('NumAltura').value.replace(',', '.');
    var lado1 = document.getElementById('NumLado1').value.replace(',', '.');
    var lado2 = document.getElementById('NumLado2').value.replace(',', '.');
    var lado3 = document.getElementById('NumLado3').value.replace(',', '.');
    var lado4 = document.getElementById('NumLado4').value.replace(',', '.');
    function area() {
        var mostrararea = parseFloat(base) * parseFloat(altura);
        return mostrararea.toFixed(2);
    }
    function Soma() {
        sum = 0;
        sum += parseFloat(lado1);
        sum += parseFloat(lado2);
        sum += parseFloat(lado3);
        sum += parseFloat(lado4);
        return sum.toFixed(2);
    }
    if (altura >= 1 && base >= 1) {
        document.getElementById('ResultArea').innerHTML = ("Base × Altura = " + area().replace('.', ',') + " m² ");
    }
    else if (altura < 0 || base < 0) {
        document.getElementById('ResultArea').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultArea').innerHTML = ("Não existe/não foi inserido!");
    }
    if (lado1 >= 1 && lado2 >= 1 && lado3 >= 1 && lado4 >= 1) {
        document.getElementById('ResultPerimetro').innerHTML = ("L + L + L + L = " + Soma().replace('.', ',') + " m ");
    }
    else if (lado1 < 0 || lado2 < 0 || lado3 < 0 || lado4 < 0) {
        document.getElementById('ResultPerimetro').innerHTML = ("Error (negativo)")
    }
    else {
        document.getElementById('ResultPerimetro').innerHTML = ("Não existe/não foi inserido!");
    }
}