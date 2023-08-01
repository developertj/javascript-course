function gamingIsToggled(){
  let buttonElement = document.querySelector(".gaming-button");
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  } else{
    buttonElement.classList.add("is-toggled");
  } 
}
function techIsToggled(){
  let buttonElement = document.querySelector(".tech-button");
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  } else{
    buttonElement.classList.add("is-toggled");
  } 
}
function musicIsToggled(){
  let buttonElement = document.querySelector(".music-button");
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  } else{
    buttonElement.classList.add("is-toggled");
  } 
}