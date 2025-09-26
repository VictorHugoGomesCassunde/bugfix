document.getElementById("btnContar").addEventListener("click", function() {
  contador++; 
  document.getElementById("contador").innerText = contador;
});
document.getElementById("btnInverter").addEventListener("click", function() {
  let texto = document.getElementById("textoOriginal").value;
  let invertido = texto.split("").reverse().join(""); 
  document.getElementById("textoInvertido").innerText = "Invertido: " + invertidoo; 
  
});