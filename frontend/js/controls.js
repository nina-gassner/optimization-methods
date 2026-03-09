export function connectSlider() {

    const adjustments = document.querySelectorAll(".parameter-adjustment");


    adjustments.forEach(adj => {

        const inputSlider = adj.querySelector("input[type='range']");
        const display = adj.querySelector(".val-display");

        
        // initializing the label !
        display.textContent = inputSlider.value; // the value we have pre-initialized

        // move slider -> update
        inputSlider.addEventListener("input", () => {
            display.textContent = inputSlider.value;
        });

    });

}