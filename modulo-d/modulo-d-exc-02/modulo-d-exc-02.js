function carregar() {
  let clickVerificarIdade = window.document.querySelector(".verificar"); 
  function verificarIdade() {
    let data = new Date();
    let ano = data.getFullYear();
    let anoNasc = window.document.getElementById("anoNasc");
    let areaVerificadora = window.document.querySelector("div.AreaVerificadora"); 
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
      window.alert("[Erro] O campo de formulário está vazio, digite o ano de nascimento.");
    } else {
      let idade = ano - Number(anoNasc.value);
      let escsex = window.document.getElementsByName("escsex");
      let genero = "";
      let img = window.document.createElement("img");
      if(escsex[0].checked) {
        genero = "Mulher";
        if(idade >= 0 && idade < 18) {
          img.setAttribute("src", "img-jovem-m.jpeg");
        } else if(idade > 50) { 
          img.setAttribute("src", "img-idoso-m.jpeg");
        } else { 
          img.setAttribute("src", "img-adulto-m.jpeg");
        }
      } else if(escsex[1].checked) {
        genero = "Homem";
        if(idade >= 0 && idade < 18) {
          img.setAttribute("src", "img-jovem-h.jpeg");
        } else if(idade > 50) { 
          img.setAttribute("src", "img-idoso-h.jpeg");
        } else { 
          img.setAttribute("src", "img-adulto-h.jpeg");
        }
      }
      img.id = "imgVerificadora";
      areaVerificadora.style.textAlign = "center";
      areaVerificadora.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      areaVerificadora.appendChild(img);
    }
  }
  clickVerificarIdade.addEventListener('click', verificarIdade);
}
window.addEventListener('load', carregar);