let contador = 0; 
document.getElementById("btnContar").addEventListener("click", function() {
  contador++;
  document.getElementById("contador").innerText = contador;
});


document.getElementById("btnInverter").addEventListener("click", function() {
  let texto = document.getElementById("textoOriginal").value;
  let invertido = texto.split("").reverse().join(""); 
  document.getElementById("textoInvertido").innerText = "Invertido: " + invertido; 
  
});


document.getElementById("btnSomar").addEventListener("click", function() {
  let n1 = parseFloat(document.getElementById("num1").value) || 0;
  let n2 = parseFloat(document.getElementById("num2").value) || 0;
  let soma = n1 + n2; 
  document.getElementById("resultado").innerText = "Resultado: " + soma;
});