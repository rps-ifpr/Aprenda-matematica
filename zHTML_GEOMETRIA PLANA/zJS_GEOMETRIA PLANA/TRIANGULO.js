function Calcula() {
    var base = document.getElementById('NumBase').value;
    var altura = document.getElementById('NumAltura').value;
    var lado1 = document.getElementById('NumLado1').value;
    var lado2 = document.getElementById('NumLado2').value;
    var lado3 = document.getElementById('NumLado3').value;
    lado1 = parseFloat(lado1.replace(',', '.'));
    lado2 = parseFloat(lado2.replace(',', '.'));
    lado3 = parseFloat(lado3.replace(',', '.'));
    base = parseFloat(base.replace(',', '.'));
    altura = parseFloat(altura.replace(',', '.'));
    function area() {
        var mostrararea = (parseFloat(base) * parseFloat(altura)) / 2;
        return mostrararea.toFixed(2);
    }
    function Soma() {
        sum = 0;
        sum += parseFloat(lado1);
        sum += parseFloat(lado2);
        sum += parseFloat(lado3);
        return sum.toFixed(2);
    }
    if (altura >= 1 && base >= 1) {
        document.getElementById('ResultArea').innerHTML = ("(base × altura)/2   =   " + area().replace('.', ',') + " m² ");
    }
    else if (altura < 0 || base < 0) {
        document.getElementById('ResultArea').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultArea').innerHTML = ("Não existe/não foi inserido!");
    }
    if (lado1 >= 1 && lado2 >= 1 && lado3 >= 1) {
        document.getElementById('ResultPerimetro').innerHTML = ("L + L + L " + " = " + Soma().replace('.', ',') + " m ");
    }
    else if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
        document.getElementById('ResultPerimetro').innerHTML = ("Error (negativo)")
    }
    else {
        document.getElementById('ResultPerimetro').innerHTML = ("Não existe/não foi inserido!");
    }
}