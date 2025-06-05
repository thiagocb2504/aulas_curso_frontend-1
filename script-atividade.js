function mostrarMaior() {
    var v1 = parseFloat(document.getElementById('valor1').value);
    var v2 = parseFloat(document.getElementById('valor2').value);
    var v3 = parseFloat(document.getElementById('valor3').value);
    
    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira todos os valores corretamente.";
        return;
    }
    
    var maior = Math.max(v1, v2, v3);
    document.getElementById('resultado').innerHTML = "Maior valor: " + maior;
}