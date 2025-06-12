function usoLoop(){
  let text = "";
  let i = 0;
  while (i < 10) {
    text += "<br>O número é " + i;
    i++;
  }
  document.getElementById("demo").innerHTML = text;
}

function usoFor(){
  let text = "";
   
  for (let i = 0; i < 100; i++) {
    text += "<br>O número é " + ((2*i))+1;
  }
 
  document.getElementById("demo").innerHTML = text;
}

function limpar(){
  document.getElementById("demo").innerHTML = "";

}