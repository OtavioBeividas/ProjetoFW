 // Selecionando o formulário e o elemento onde o resultado será exibido
 const form = document.querySelector('form');
 const resultDiv = document.querySelector('#result');
 
 // Função para calcular o TDEE
 function calculateTDEE(event) {
     // Prevenindo o envio do formulário
     event.preventDefault();

     // Obtendo os valores dos campos do formulário
     const age = Number(document.querySelector('#age').value);
     const gender = document.querySelector('#gender').value;
     const height = Number(document.querySelector('#height').value);
     const weight = Number(document.querySelector('#weight').value);
     const activity = Number(document.querySelector('#activity').value);
   
     // Calculando o TDEE
     let bmr;
     
     if (activity === '2'){
      activity.value = 1.9
     }
     else if (activity === '3'){
      activity.value = 1.725
     }
     else if (activity === '4'){
      activity.value = 1.55
     }
     else if (activity === '5'){
      activity.value = 1.375
     }
     else {
      activity.value = 1.1
     }

     if (gender === 'male') {
       bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * activity;
     } else {
       bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * activity;
     }
     teste = bmr * 1.57
     const tdee = teste;
   
     // Exibindo o resultado
     resultDiv.textContent = `Seu TDEE é de ${tdee.toFixed(2)} calorias por dia.`;
   }
   
   // Adicionando o evento de envio do formulário
   form.addEventListener('submit', calculateTDEE);