function mostrarMaior() {
  const v1 = parseFloat(document.getElementById('valor1').value);
  const v2 = parseFloat(document.getElementById('valor2').value);
  const v3 = parseFloat(document.getElementById('valor3').value);
  const resultado = document.getElementById('resultado');
  const titulo = document.getElementById('titulo');

  if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
    resultado.textContent = "Por favor, preencha todos os valores corretamente.";
    resultado.style.color = "#d8000c";
    titulo.style.color = "#d8000c";
    document.body.style.background = "#ffe5e5";
    return;
  }

  const maior = Math.max(v1, v2, v3);
  resultado.textContent = "Maior valor: " + maior;
  resultado.style.color = "#007e33";
  titulo.style.color = "#007e33";
  document.body.style.background = "#e6fff2";
}