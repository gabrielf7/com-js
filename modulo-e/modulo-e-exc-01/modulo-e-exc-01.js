function carregar() { 
  // Buscando o getElement
  let contar = window.document.getElementById("buttonContar");
  let inicio = window.document.getElementById("inicio");
  let fim = window.document.getElementById("fim");
  let intervalo = window.document.getElementById("intervalo");
  let mgsResultado = window.document.getElementById("mgsResultado");
  let resultado = window.document.getElementById("resultado");
  let limparHistDeContas = window.document.getElementById("limparHistDeContas");
  let historicoDeContas = window.document.getElementById("historicoDeContas");
  let QtdDeContas = window.document.getElementById("QtdDeContas");
  let qtdHistContas = 1;

  // Lógica por trás da conta
  function Logica() {
    // Atribuindo e convertendo variáveis em Number
    let contInicio = Number(inicio.value);
    let contFim = Number(fim.value);
    let contIntervalo = Number(intervalo.value);

    if (contIntervalo <= 0) {
      window.alert("[Aviso] Intervalo Inválido! : Considerando intervalo = 1.");
      contIntervalo = 1;
    }
    if (contInicio < contFim) {
      for(let conte = contInicio; conte <= contFim; conte+=contIntervalo) {
        resultado.innerHTML += `${conte} \u{1F449}`;
      }
    } else {
      for(let conte = contInicio; conte >= contFim; conte-=contIntervalo) {
        resultado.innerHTML += `${conte} \u{1F449}`;
      }
    }
  }

  // Exibir resultado da conta
  function ExibirResultado() {
    if(inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
      mgsResultado.innerHTML = "[Aviso] Impossível contar!";
    } else {
      if (inicio.value.length == 4 || fim.value.length == 4 || intervalo.value.length == 4) {
        mgsResultado.innerHTML = "[Aviso] Cálculo muito grande, digite apenas 3 dígitos.";
      } else {
        mgsResultado.innerHTML = "Contando: </br>";
        Logica();
        resultado.innerHTML += `\u{1F3C1}`;
        qtdHistContas == 1 ? historicoDeContas.innerHTML = "" : "";
        historicoDeContas.innerHTML += `</br>| ${qtdHistContas++} |-----|</br>${resultado.innerHTML}`;
        QtdDeContas.innerHTML = qtdHistContas - 1;
      }
    }
  }

  // Contar
  function EventContagem(pEvent01, pEvent02) {
    contar.removeEventListener("click", pEvent01), contar.addEventListener("click", pEvent02);
  }
  function LimparConta() {
    resultado.innerHTML = "";
    mgsResultado.innerHTML = "Preencha os campos...";
    contar.innerHTML = "Contar";
    EventContagem(LimparConta, Conta);
  }
  function Conta() {
    ExibirResultado();
    EventContagem(Conta, LimparConta);
    contar.innerHTML = "Limpar";
  }
  contar.addEventListener("click", Conta);

  // Histórico de contas
  function LimparHistoricoDeConta() {
    historicoDeContas.innerHTML = "Esperando contas feitas...";
    qtdHistContas = 1;
    QtdDeContas.innerHTML = 0;
  }
  limparHistDeContas.addEventListener("click", LimparHistoricoDeConta);
}
