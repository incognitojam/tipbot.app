const app = require("./index");

const coins = [
  {
    id: "dogecoin",
    name: "Dogecoin",
    code: "DOGE",
    symbol: "Ð"
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    code: "BTC",
    symbol: "₿"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    code: "ETH",
    symbol: "Ξ"
  },
  {
    id: "litecoin",
    name: "Litecoin",
    code: "LTC",
    symbol: "Ł"
  }
];

app.get("/coins", (req, res) => {
  res.send(coins);
});

app.get("/coins/:id", (req, res) => {
  const id = req.params.id;
  const coin = coins.find(value => value.id === id);

  if (!coin) {
    res.status(404).send({
      error: `No coin found with id '${id}`
    });
    return;
  }

  res.send(coin);
});
