const form = document.getElementById('conversor');
const valorInput = document.getElementById('valor');
const moedaOrigemSelect = document.getElementById('moeda-origem');
const moedaDestinoSelect = document.getElementById('moeda-destino');
const valorConvertidoSpan = document.getElementById('valor-convertido');

//essa contante taxasDeCambio, eu achei na internet, e usei de exemplo, pois era bem diferente do que eu pensei q
const taxasDeCambio = {
    BRL: {
        USD: 0.19,
        EUR: 0.17,
    },
    USD: {
        BRL: 5.26,
        EUR: 0.90,
    },
    EUR: {
        BRL: 5.88,
        USD: 1.11,
    },
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const valor = valorInput.value;
    const moedaOrigem = moedaOrigemSelect.value;
    const moedaDestino = moedaDestinoSelect.value;

    const taxaDeCambio = taxasDeCambio[moedaOrigem][moedaDestino];
    const valorConvertido = valor * taxaDeCambio;

    valorConvertidoSpan.textContent = `${valorConvertido} ${moedaDestino}`;
});