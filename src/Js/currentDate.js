export function exibirToday() {
  const time = Date.now();
  let hora = new Date(time).getHours();
  const Atual = new Date(time);
  const locale = "pt-BR";
  
  let currentDate = document.createElement("div");
  currentDate.classList.add("currentDate");
  currentDate.innerText = `${Atual.toLocaleDateString(locale)}`;
  return currentDate;
}
