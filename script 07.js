var meuArray = ['terra', 'agua', 'ar', 'fogo'];

function adcionar(){
  var valor = document.getElementById('entrada').value;
  meuArray.push(valor);
  document.getElementById('entrada').value= "";
}

function imprimirLista(){
  let text = "";
   
  tamanho_array = meuArray.length;

  for (let i = 0; i < tamanho_array; i++) {
    text += "<br> " + meuArray[i];
  }
 
  document.getElementById("demo").innerHTML = text;
}

function limpar(){
  document.getElementById("demo").innerHTML = "";
  meuArray = ['terra', 'agua', 'ar', 'fogo'];

}