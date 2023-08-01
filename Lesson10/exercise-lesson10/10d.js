function isToggled(){
  let buttonElement = document.querySelector(".gaming-button");
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  } else{
    buttonElement.classList.add("is-toggled");
  } 
}