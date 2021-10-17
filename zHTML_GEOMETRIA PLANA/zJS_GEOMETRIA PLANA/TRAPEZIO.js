function Calcula() {
    var B = document.getElementById('NumB').value;
    var b = document.getElementById('Numb').value;
    var h = document.getElementById('Numh').value;
    var lado1 = document.getElementById('NumLado1').value;
    var lado2 = document.getElementById('NumLado2').value;
    var lado3 = document.getElementById('NumLado3').value;
    var lado4 = document.getElementById('NumLado4').value;
    lado1 = parseFloat(lado1.replace(',', '.'));
    lado2 = parseFloat(lado2.replace(',', '.'));
    lado3 = parseFloat(lado3.replace(',', '.'));
    lado4 = parseFloat(lado4.replace(',', '.'));
    B = parseFloat(B.replace(',', '.'));
    b = parseFloat(b.replace(',', '.'));
    h = parseFloat(h.replace(',', '.'));
    function area() {
        var mostrararea = ((parseFloat(B) + parseFloat(b)) * parseFloar(h)) / 2;
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
    if (B && b && h >= 1) {
        document.getElementById('ResultArea').innerHTML = ("[(B + b) × h] /2  =   " + area().replace('.', ',') + " m² ");
    }
    else if (B && b && h < 0) {
        document.getElementById('ResultArea').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultArea').innerHTML = ("Não existe/não foi inserido!");
    }
    if (lado1 >= 1 && lado2 >= 1 && lado3 >= 1 && lado4 >= 1) {
        document.getElementById('ResultPerimetro').innerHTML = ("L + L + L + L = " + Soma().replace('.', ',') + " m ");
    }
    else if (lado1 < 0 || lado2 < 0 || lado3 < 0 || lado4 < 0) {
        document.getElementById('ResultPerimetro').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultPerimetro').innerHTML = ("Não existe/não foi inserido!");
    }
}