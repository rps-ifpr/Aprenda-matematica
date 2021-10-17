function Calcula() {
    var lado = document.getElementById('NumLado').value.replace(',', '.');
    function volume() {
        var mostrarvolume = ((parseFloat(lado) ** 2) * 1.41) / 3;
        return mostrarvolume.toFixed(2);
    }
    if (lado >= 1) {
        document.getElementById('ResultVolume').innerHTML = ("(L² × √2)/3 = " + volume().replace('.', ',') + " m³");
    }
    else if (lado < 0) {
        document.getElementById('ResultVolume').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultVolume').innerHTML = ("Não existe/não foi inserido!");
    }
}