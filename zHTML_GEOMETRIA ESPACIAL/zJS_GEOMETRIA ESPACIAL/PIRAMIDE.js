function Calcula() {
    var lado = document.getElementById('NumLado').value.replace(',', '.');
    var h = document.getElementById('NumAltura').value.replace(',', '.');
    function AreaBasePiramide() {
        ab = parseFloat(lado) ** 2;
        return ab.toFixed(2);;
    }
    function volume() {
        var mostrarvolume = (parseFloat(AreaBasePiramide()) * parseFloat(h)) / 3;
        return mostrarvolume.toFixed(2);
    }
    if (lado >= 1 && h >= 1) {
        document.getElementById('ResultVolume').innerHTML = (" AbPirâmide × h = " + volume().replace('.', ',') + " m³ ");
        document.getElementById('ResultAreaBase').innerHTML = ("L² = " + AreaBasePiramide().replace('.', ',') + " m² ");
    }
    else if (lado >= 1) {
        document.getElementById('ResultAreaBase').innerHTML = ("L² = " + AreaBasePiramide().replace('.', ',') + " m² ");
    }
    else if (lado < 0 || h < 0) {
        document.getElementById('ResultVolume').innerHTML = ("Error(negativo)");
        document.getElementById('ResultAreaBase').innerHTML = ("Error(negativo)");
    }
    else {
        document.getElementById('ResultVolume').innerHTML = ("Não existe/não foi inserido!");
        document.getElementById('ResultAreaBase').innerHTML = ("Não existe/não foi inserido!");
    }
}