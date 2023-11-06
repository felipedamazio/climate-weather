export const currentHour = () => {  

  const time = Date.now();    

  const Atual = new Date(time);  
         
  document.querySelector(".info-bra").innerHTML = '<img src="../assets/brazil.png" alt=""> Brasília - BR';  
  document.querySelector(".hora-bra").innerHTML = Atual.toLocaleTimeString('pt-BR');

  document.querySelector(".info-usa").innerHTML = '<img src="../assets/united-states.png" alt=""> New York - US';  
  document.querySelector(".hora-usa").innerHTML = Atual.toLocaleTimeString("en-US", { timeZone: 'America/New_York',});

  document.querySelector(".info-fra").innerHTML = '<img src="../assets/france.png" alt=""> Paris - FR';  
  document.querySelector(".hora-fra").innerHTML = Atual.toLocaleTimeString("fr-FR", { timeZone: 'Europe/Paris'});

  document.querySelector(".info-chi").innerHTML = '<img src="../assets/china.png" alt=""> Shangai - CN';  
  document.querySelector(".hora-chi").innerHTML = Atual.toLocaleTimeString("zh-CN", { timeZone:'Asia/Shanghai'});    

};



