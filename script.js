document.addEventListener("DOMContentLoaded", function () { // Se usa eventlistener para que primero se cargue el HTML antes del script
    const display = document.querySelector(".display"); // Se almacena el display en la variable display para luego evaluar
    const buttons = document.querySelectorAll("button"); // Se almacenan todos los botones en la variable buttons (en un array)
    let resultShown = false; // Se crea una variable para saber si hay un resultado mostrado

    // Por cada boton apretado, se evaluaran las siguientes condiciones, con cada click en cada boton
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent; // Se crea una variable con el contenido del boton apretado que sera seleccionado a partir  
                                                    //del array previamente creadopara luego operar con esa variable

            if (resultShown && /\d/.test(buttonText)) {
                // Si se mostro un resultado anterior y el usuario presiona un digito, limpiar la pantalla a menos que se siga operando con ese resultado
                if (buttonText == "/" || buttonText == "*" || buttonText == "+" || buttonText == "-") {
                    resultShown = false;
                } else {
                    resultShown = false;
                }
            }

            if (buttonText === "=") {
                // Se evalua la expresion matematica y devuelve el resultado. Se muestra resultado como true
                display.textContent = eval(display.textContent);
                resultShown = true;    
            } else if (buttonText === "C") { 
                display.textContent = "0"; // Se borra todo el contenido del display
            } else if (buttonText === "CE" ) {
                if (resultShown == false) {
                    display.textContent = display.textContent.slice(0,-1); // Si se apreta CE y aun no se ha mostrado el resultado borra solo el ultimo numero del display
                } else {
                    display.textContent = "0"; // Si se habia mostrado el resultado, se borra todo el display
                }
            } else {
                if (display.textContent === "0") {
                    display.textContent = buttonText; // Si el display muestra 0, se sobre escribe con el proximo numero apretado
                } else {
                    display.textContent += buttonText; // Si hay numeros en el display, se agrega el proximo boton apretado
                }
            }
        });
    });
});
