function carregar() { 
  // Buscando o getElement
  let numeroEscolhido = window.document.getElementById('numeroEscolhido'); numeroEscolhido.value = "";
  let btnNumeroEscolhido = window.document.getElementById('btnNumeroEscolhido');
  let btnLimparTudo = window.document.getElementById('btnLimparTudo');
  let seqNumeroEscolhido = window.document.getElementById('seqNumeroEscolhido');
  let btnFinalizar = window.document.getElementById('btnFinalizar');
  let resultadoDaSEQ = window.document.getElementById('resultadoDaSEQ');

  // Definir Processos
  let listaDeSequencia = [];
  let conteSEQ = 0;
  
  // Descobrir o valor do maior e menor da sequência
  function saberMMValorDaSEQ() {
    let maior = 0; let menor = 0;
    for(conte = 0; conte < listaDeSequencia.length; conte++) {
      if(conte == 0) {
        maior = listaDeSequencia[0]; menor = listaDeSequencia[0];
      } else if(listaDeSequencia[conte] > maior) {
        maior = listaDeSequencia[conte];
      } else if(listaDeSequencia[conte] < menor) {
        menor = listaDeSequencia[conte];
      }
    }
    return [maior, menor];
  }

  // Descobrir a soma total da sequência 
  function saberSomaTotalDaSEQ() {
    let valorDaSoma	=	() => {
      let soma = 0;
      for(let contar=0; contar < listaDeSequencia.length; contar++){
        soma += listaDeSequencia[contar];
      }
      return soma;
    };
    return valorDaSoma();
  }

  // Descobrir a média dos valores da sequência
  function saberMediaDaSEQ() {
    return (saberSomaTotalDaSEQ() / listaDeSequencia.length).toFixed(2);
  }

  // Exibir o resultado dos processos da sequência
  function FinalizarSolicitacao() {
    if(seqNumeroEscolhido.innerHTML == "" || listaDeSequencia.length == 0) {
      window.alert("[Aviso] Ação inválida, o campo de sequência está vazio, adicione um número entre 1 a 100.");
    } else {
      resultadoDaSEQ.innerHTML = "";
      let saberValorMM = saberMMValorDaSEQ();
      resultadoDaSEQ.innerHTML += `<p>Ao todo, temos ${listaDeSequencia.length} números cadastrados.</p>`;
      resultadoDaSEQ.innerHTML += `<p>O maior valor informado foi de ${saberValorMM[0]}.</p>`;
      resultadoDaSEQ.innerHTML += `<p>O menor valor informado foi de ${saberValorMM[1]}.</p>`;
      resultadoDaSEQ.innerHTML += `<p>A soma total dos valores foi de ${saberSomaTotalDaSEQ()}.</p>`;      
      resultadoDaSEQ.innerHTML += `<p>A média dos valores digitados é ${saberMediaDaSEQ()}.</p>`;
    }
  }
  btnFinalizar.addEventListener("click", FinalizarSolicitacao);

  // Encontrar o número igual na lista da sequência
  function EncontrarNumero(procurarNumero) {
    let encontrado = listaDeSequencia.find((numero) => {
      return numero === procurarNumero;
    });
    if(encontrado === procurarNumero){
      return true;
    } else {
      return false;
    }
  }

  // Adicionar um valor a lista da sequência
  function AddNumeroInserido() {
    if(numeroEscolhido.value.length == 0) {
      window.alert("[Aviso] Ação inválida! Digite um número entre 1 e 100.");
    } else if(Number(numeroEscolhido.value) <= 0 || Number(numeroEscolhido.value) > 100) {
      window.alert("[Aviso] O número é inválido! Digite apenas entre 1 a 100.");      
    } else if(EncontrarNumero(Number(numeroEscolhido.value)) === true) {
      window.alert("[Aviso] O número já foi utilizado, digite outro entre 1 a 100."); 
    } else {
      resultadoDaSEQ.innerHTML = "";
      listaDeSequencia.push(Number(numeroEscolhido.value));
      let option = document.createElement("option");
      option.value = `SEQ${conteSEQ+1}`;
      option.text = `Valor ${Number(numeroEscolhido.value)} adicionado.`;
      seqNumeroEscolhido.appendChild(option);
    }
  }
  btnNumeroEscolhido.addEventListener("click", AddNumeroInserido);

  // Limpar todo conteúdo inserido e processado 
  function LimparConteudo() {
    numeroEscolhido.value = "";
    seqNumeroEscolhido.innerHTML = "";
    resultadoDaSEQ.innerHTML = "";
    listaDeSequencia = [];
  }
  btnLimparTudo.addEventListener("click", LimparConteudo);
}
window.addEventListener('load', carregar);
