document.getElementById("btnContar").addEventListener("click", function() {
  contador++; 
  document.getElementById("contador").innerText = contador;
});
document.getElementById("btnInverter").addEventListener("click", function() {
  let texto = document.getElementById("textoOriginal").value;
  let invertido = texto.split("").reverse().join(""); 
  document.getElementById("textoInvertido").innerText = "Invertido: " + invertidoo; 
  
});
document.getElementById("btnSomar").addEventListener("click", function() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
  let soma = n1 + n2; 
  document.getElementById("resultado").innerText = "Resultado: " + soma;
});