import brasil from "../assets/img/brazil.png";
import unitedStates from "../assets/img/united-states.png";
import france from "../assets/img/france.png";
import china from "../assets/img/china.png";

export const currentHour = () => {  

  const time = Date.now();    

  const Atual = new Date(time);  
         
  document.querySelector(".info-bra").innerHTML = `<img src=${brasil} alt=""> Brasília - BR`;  
  document.querySelector(".hora-bra").innerHTML = Atual.toLocaleTimeString('pt-BR');

  document.querySelector(".info-usa").innerHTML = `<img src=${unitedStates} alt=""> New York - US`;  
  document.querySelector(".hora-usa").innerHTML = Atual.toLocaleTimeString("en-US", { timeZone: 'America/New_York',});

  document.querySelector(".info-fra").innerHTML = `<img src=${france} alt=""> Paris - FR`;  
  document.querySelector(".hora-fra").innerHTML = Atual.toLocaleTimeString("fr-FR", { timeZone: 'Europe/Paris'});

  document.querySelector(".info-chi").innerHTML = `<img src=${china} alt=""> Shangai - CN`;  
  document.querySelector(".hora-chi").innerHTML = Atual.toLocaleTimeString("zh-CN", { timeZone:'Asia/Shanghai'});    

};





