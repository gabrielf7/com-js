function carregar() {
  let corpo = window.document.body; 
  let textoHorario = window.document.getElementById("textoHorario");
  let imgHorario = window.document.getElementById("imgHorario");
  let horario = new Date();
  let hora = horario.getHours();
  textoHorario.innerHTML = `Agora são ${hora}h`;

  if(hora < 6) {
    imgHorario.src = "./img-noite-02.jpeg";
    corpo.style.backgroundColor = "#30554c"; imgHorario.style.borderColor = "#30554c";
  } else if(hora < 13) {
    imgHorario.src = "./img-dia-01.jpg";
    corpo.style.backgroundColor = "#fce289"; imgHorario.style.borderColor = "#fce289";
  } else if(hora < 18) {
    imgHorario.src = "./img-dia-02.jpeg";
    corpo.style.backgroundColor = "#faf153"; imgHorario.style.borderColor = "#faf153";
  } else if(hora < 24) {
    imgHorario.src = "./img-noite-01.jpeg";
    corpo.style.backgroundColor = "#674A70"; imgHorario.style.borderColor = "#674A70";
  } else {
    textoHorario.innerHTML = "Aconteceu algum erro, tente novamente mais tarde!";
  }
}
window.addEventListener('load', carregar);

// Dia e Noite
   
  // if(hora < 6 || (hora >= 18 && hora < 24) ) {
  //   imgHorario.src = "./img-noite-02.jpeg";
  //   corpo.style.backgroundColor = "black";
  // } else if (hora < 18) {
  //   imgHorario.src = "./img-dia-02.jpeg";
  //   corpo.style.backgroundColor = "yellow";
  // } else {
  //   textoHorario.innerHTML = "Aconteceu algum erro, tente novamente mais tarde!";
  // }