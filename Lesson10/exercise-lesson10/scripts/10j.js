let calculation = localStorage.getItem('calc') || '';
      
      let result = document.querySelector('.js-result');

      displayCalculation();

      function updateCalculation(num){
        localStorage.setItem('calc', calculation += num) ;
        result.innerHTML = calculation;
      }

      function displayCalculation(){
        result.innerHTML = calculation;
      }