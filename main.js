function calculateTaxes() {
    var name = document.getElementById("name").value;
    var birthdate = new Date(document.getElementById("birthdate").value);
    var salary = parseFloat(document.getElementById("salary").value);
    var age = parseInt(document.getElementById("age").value);
    var baseTaxRate = 0.05; // 5%
    var additionalTaxRate = 0.1; // 0.1% por cada año adicional por encima de 20
    var taxRate = baseTaxRate + (Math.max(age - 20, 0) * additionalTaxRate);
    var taxes = salary * taxRate;
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Resultados:</h2>" +
        "<p>Nombre: " + name + "</p>" +
        "<p>Edad: " + age + "</p>" +
        "<p>Salario: $" + salary.toFixed(2) + "</p>" +
        "<p>Impuestos a pagar: $" + taxes.toFixed(2) + "</p>";
}
