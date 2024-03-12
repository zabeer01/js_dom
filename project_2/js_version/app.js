const bodyBackgroundColor = document.getElementById('root');
const writings = document.getElementById('writings');
const btn = document.getElementById('change-btn');

function generateRandomColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor ; 
}

function changeBackgorundColor(){
   /*  backgroundColor.style.backgroundColor = 'blue'; */

   bodyBackgroundColor.style.backgroundColor =  generateRandomColor();
  /*  writings.style.backgroundColor =  generateRandomColor(); */
  writings.style.color  =  generateRandomColor();
}

btn.addEventListener('click', function() {
    changeBackgorundColor();
});