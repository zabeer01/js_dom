window.onload = () => {
	main();
};

function main(){

/* document.addEventListener('DOMContentLoaded', function () { */
    const bodyBackgroundColor = document.body; // Corrected line
    const writings = document.getElementById('writings');
    const btn = document.getElementById('change-btn');

    function generateRandomColor() {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const randomColor = `rgb(${red},${green},${blue})`;
        return randomColor;
    }

    function changeBackgroundColor() {
        /*  backgroundColor.style.backgroundColor = 'blue'; */
        /*  writings.style.backgroundColor =  generateRandomColor(); */
        bodyBackgroundColor.style.backgroundColor = generateRandomColor(); // Corrected line
        writings.style.color = generateRandomColor();
    }

    btn.addEventListener('click', function () {
        changeBackgroundColor();
    });
/* }); */
}