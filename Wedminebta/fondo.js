let texto = document.getElementById("texto");
let contenido = texto.innerHTML;
texto.innerHTML = "";
let i = 0;
let timer = setInterval(function() {
  if (i < contenido.length) {
    texto.innerHTML += contenido.charAt(i);
    i++;
  } else {
    clearInterval(timer);
  }
}, 50);



  
  