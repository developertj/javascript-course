function subscribe(){
  const buttonElement = document.querySelector('.js-subscribe-button');
  if(buttonElement.innerText === 'Subscribe'){
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add ('is-subscribed');
  } else{
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

//Amazon shipping calculator project
//algo take input. if input is less than 40 then print input + 10. if input is greater than 40 then print input.
function handleOnKeyDown(event){
  if(event.key === 'Enter'){
    calculate();
  }
}

function calculate(){
  let inputElement = document.querySelector('.js-input');
  let cost = inputElement.value;
  if(cost < 40 && cost > 0){
    document.querySelector('.total-cost')
      .innerHTML = `$${Number(cost) + 10}`;
  } else if(cost < 0){
    document.querySelector('.total-cost').classList.add('error-msg');
    document.querySelector('.total-cost')
      .innerHTML = "Error: cost cannot be less than $0";
  } 
  else{
    document.querySelector('.total-cost')
      .innerHTML = `$${cost}`;
  }
}
