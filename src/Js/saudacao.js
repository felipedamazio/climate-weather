export function saudacao() {
  const time = Date.now();
  let hora = new Date(time).getHours();

  // Crie o elemento .saudacao
  const saudacaoDiv = document.createElement("div");
  saudacaoDiv.classList.add("saudacao");

  // EXIBINDO SAUDAÇÃO DE ACORDO COM AS CONDIÇOES E HORARIO ATUAL -------------

  const manha = hora >= 0 && hora < 12 ? " BOM DIA - BRASIL ! " : "";
  const tarde =
    hora >= 12 && hora < 18
      ? " BOA TARDE- BRASIL ! "
      : " BOA NOITE - BRASIL ! ";

  if (manha) {
    saudacaoDiv.innerText = ` ${manha} `;
  } else {
    saudacaoDiv.innerText = ` ${tarde} `;
  }
  return saudacaoDiv;
}
