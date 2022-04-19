function carregar() { 
  let areaLink = window.document.getElementById("areaLink"); 
  let url_atual = window.location.href;

  console.log(window.location.host);
  console.log(window.location.pathname);
  console.log(window.location.hostname);
  console.log(window.location.host + window.location.pathname);

  function CriarLink(caminho, link, linkTitulo){
    let inserirConteudo = `
      <div>
        ${caminho}
        <a class="buttonLink" href="${url_atual}${link}" target="blank_">${linkTitulo}</a>
      </div>
    `;
    areaLink.innerHTML += inserirConteudo;
  }
  CriarLink("Módulo D : '/modulo-d/modulo-d-exc-01/'", "/modulo-d/modulo-d-exc-01/modulo-d-exc-01.html", 
    "Estação do Dia"
  );
  CriarLink("Módulo D : '/modulo-d/modulo-d-exc-02/'", "/modulo-d/modulo-d-exc-02/modulo-d-exc-02.html", 
    "Verificar Perfil"
  );
  CriarLink("Módulo E : '/modulo-e/modulo-e-exc-01/'", "/modulo-e/modulo-e-exc-01/modulo-e-exc-01.html", 
    "Vamos Contar"
  );
  CriarLink("Módulo E : '/modulo-e/modulo-e-exc-02/'", "/modulo-e/modulo-e-exc-02/modulo-e-exc-02.html", 
    "Gerador de Tabuada"
  );
}
window.addEventListener('load', carregar);