function carregar() {
  // Buscando o getElement
  let numeroEscolhido = window.document.getElementById("numeroEscolhido"); numeroEscolhido.value = "";
  let buttonNumeroEscolhido = window.document.getElementById("buttonNumeroEscolhido");
  let adicao = window.document.getElementById("tab-adicao");
  let divisao = window.document.getElementById("tab-divisao");
  let multiplicacao = window.document.getElementById("tab-multiplicacao");
  let subtracao = window.document.getElementById("tab-subtracao");
  let buttonGerarImagem = window.document.getElementById("buttonGerarImagem");
  let imagemConteudo = window.document.getElementById('imagemConteudo');
  let imagemGerada = window.document.getElementById('imagemGerada');
  let msgButtonGerarImagem = window.document.getElementById('msgButtonGerarImagem');
  let limparTudo = window.document.getElementById('limparTudo');

  // Itens para compor a imagem gerada
  let giAdicao = "";
  let giDivisao = "";
  let giMultiplicacao = "";
  let giSubtracao = "";

  // Operação da tabuada (+, /, x, -)
  function GerarTabuada(sinal){
    let numero = Number(numeroEscolhido.value);
    for (let calcular = 1; calcular <= 10; calcular++) {
      let option = document.createElement("option");
      option.value = `tab${calcular}`;
      if(sinal === "+") {
        option.text = `${numero} + ${calcular} = ${numero + calcular}`;
        adicao.appendChild(option);
      } else if(sinal === "/") {
        option.text = `${numero} / ${calcular} = ${(numero / calcular).toFixed(2)}`;
        divisao.appendChild(option);
      } else if(sinal === "x") {
        option.text = `${numero} x ${calcular} = ${numero * calcular}`;
        multiplicacao.appendChild(option);
      } else if(sinal === "-") {
        option.text = `${numero} - ${calcular} = ${numero - calcular}`;
        subtracao.appendChild(option);
      }
    }
  }

  // Capturar o cálculo selecionado em cada operação
  function ItemSelecionado01() { giAdicao = adicao.options[adicao.selectedIndex].text; }
  function ItemSelecionado02() { giDivisao = divisao.options[divisao.selectedIndex].text; }
  function ItemSelecionado03() { giMultiplicacao = multiplicacao.options[multiplicacao.selectedIndex].text; }
  function ItemSelecionado04() { giSubtracao = subtracao.options[subtracao.selectedIndex].text; }
  adicao.addEventListener("change", ItemSelecionado01);
  divisao.addEventListener("change", ItemSelecionado02);
  multiplicacao.addEventListener("change", ItemSelecionado03);
  subtracao.addEventListener("change", ItemSelecionado04);

  // Gerar imagem que contém o cálculo selecionado em cada operação e disponibilizar para download
  function GerarImagem() {
    if(giAdicao === "" || giDivisao === "" 
    || giMultiplicacao === "" || giSubtracao === "" ) {
      window.alert("[Aviso] Selecione um cálculo de cada operação.");
    } else {
      imagemConteudo.innerHTML = "";
      imagemGerada.innerHTML = "";

      imagemConteudo.setAttribute("style", 
        "border: 2px solid rgb(4, 174, 216); justify-content: space-around; padding-top: 5px; padding-bottom: 5px;"
      );
      imagemConteudo.innerHTML = `<div>Adição<div>${giAdicao}</div></div> <div>Divisão<div>${giDivisao}</div></div> 
      <div>Multiplicação<div>${giMultiplicacao}</div></div><div>Subtração<div>${giSubtracao}</div></div>`;
      let getCanvas = "";
      html2canvas(imagemConteudo).then((canvas) => {
        getCanvas = canvas.toDataURL('image/png', 1.0);
        imagemGerada.appendChild(canvas);
      });
      imagemConteudo.removeAttribute("style", 
        "border: 2px solid rgb(4, 174, 216); justify-content: space-around; padding-top: 5px; padding-bottom: 5px;"
      );

      let downloadIMGGerada = document.createElement("a");
      downloadIMGGerada.innerHTML = "&#128229; Download &#128229;";
      downloadIMGGerada.setAttribute("class", "download");
      downloadIMGGerada.setAttribute("type", "button");
      function DownloadImagemGerada() {
        let btnDownload = document.querySelector('.download');
        btnDownload.href = getCanvas;
        btnDownload.download =  'calculos-selecionados-da-tabudada-imagem';
      }
      downloadIMGGerada.addEventListener("click", DownloadImagemGerada);

      imagemConteudo.setAttribute("class", "organizarAreaImagemGerada");
      imagemConteudo.innerHTML = "Imagem gerada com sucesso!";
      imagemConteudo.insertBefore(downloadIMGGerada, imagemConteudo.lastElementChild);
    }
  }
  buttonGerarImagem.addEventListener("click", GerarImagem);

  // Limpar os nós do elemento, por exemplo, dos filhos de uma div
  function LimparNosDoElemento(elemento) {
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }

  // Limpeza total dos campos
  function LimparTodoConteudo() {
    LimparNosDoElemento(adicao); LimparNosDoElemento(divisao);
    LimparNosDoElemento(multiplicacao); LimparNosDoElemento(subtracao);
    giAdicao = ""; giDivisao = ""; giMultiplicacao = "";giSubtracao = "";
    LimparNosDoElemento(imagemConteudo); LimparNosDoElemento(imagemGerada);
  }

  // Limpeza de todo conteúdo
  function Limpezatotal() {
    LimparTodoConteudo();
    numeroEscolhido.value = "";
    buttonGerarImagem.innerHTML = "";
    buttonGerarImagem.setAttribute("class", "displayEsconder");
    msgButtonGerarImagem.setAttribute("class", "displayEsconder");
  }
  limparTudo.addEventListener("click", Limpezatotal);

  // Executar e exibir tabuada
  function Tabuada() {
    if (numeroEscolhido.value.length == 0) {
      window.alert("[Aviso] Digite um número para prosseguir.");
    } else {
      LimparTodoConteudo();
      GerarTabuada("+"); GerarTabuada("/"); GerarTabuada("x"); GerarTabuada("-");
      buttonGerarImagem.innerHTML = "Gerar Imagem";
      buttonGerarImagem.removeAttribute("class", "displayEsconder");
      msgButtonGerarImagem.removeAttribute("class", "displayEsconder");
    }
  }
  buttonNumeroEscolhido.addEventListener("click", Tabuada);
}
window.addEventListener('load', carregar);
