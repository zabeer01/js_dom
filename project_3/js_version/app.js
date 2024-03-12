window.onload = () => {
    main();
};

function main() {


    const bodyBackgroundColor = document.body; // Corrected line
    const writings = document.getElementById('writings');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    /* generate randomRgbColor */

    function generateRandomRGBColor() {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const randomRGBColor = `rgb(${red},${green},${blue})`;
        return randomRGBColor;
    }

    /* convert HexColor */

    function convertRgbToHex(rgb) {
        // Split the RGB string to get individual color values
        const [r, g, b] = rgb.match(/\d+/g);
        // Convert each color component to hexadecimal
        const hexRed = parseInt(r).toString(16).padStart(2, '0');
        const hexGreen = parseInt(g).toString(16).padStart(2, '0');
        const hexBlue = parseInt(b).toString(16).padStart(2, '0');
        // Concatenate the hexadecimal values to form the final hex color
        const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;
        console.log([r, g, b]);
        return hexColor.toUpperCase(); // Optionally, convert to uppercase
    }

    function generateHexColor() {
        const randomRgbColor = generateRandomRGBColor(); // Corrected function name
        const hexColor = convertRgbToHex(randomRgbColor);
        return hexColor;
    }
    function changeBackgroundColor() {
        bodyBackgroundColor.style.backgroundColor = generateRandomRGBColor();
       
    }

    btn.addEventListener('click', function () {
        changeBackgroundColor();
        const hexColor = generateHexColor();
        output.value = hexColor;
        console.log();
    });
}
