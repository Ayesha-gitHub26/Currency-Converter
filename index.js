function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    // Exchange rates (hardcoded for demonstration purposes)
    const exchangeRates = {
        "USD": { "USD": 1, "EUR": 0.85, "GBP": 0.75, "INR": 73.5 },
        "EUR": { "USD": 1.18, "EUR": 1, "GBP": 0.88, "INR": 86.5 },
        "GBP": { "USD": 1.34, "EUR": 1.14, "GBP": 1, "INR": 98.0 },
        "INR": { "USD": 0.0136, "EUR": 0.0116, "GBP": 0.0102, "INR": 1 },
    };

    const result = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}

function reset() {
    let resetValue = document.getElementById("result");
       resetValue.innerHTML = "";
    let resetInput = document.getElementById("amount");
        resetInput.value = "";
    document.getElementById('fromCurrency').value = '';
    document.getElementById('toCurrency').value = '';
}