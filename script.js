const calcular = (operador) => {
    const num1 = parseFloat(document.getElementById('numberA').value);
    const num2 = parseFloat(document.getElementById('numberB').value);

    let resultado = eval(`${num1} ${operador} ${num2}`);
    document.getElementById('display').textContent = resultado;

    // Borrar los números ingresados
    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
};