import express from 'express';
import calculator from './util.js';

const app = express();
app.use(express.json());

app.post("/api/calculate", async (req, res) => {
  const { val1, val2, operation } = req.body;

  if (val1 == null || val2 == null || !operation) {
    return res.status(400).send({ error: "Invalid input" });
  }

  let result;
  switch (operation) {
    case 'add':
      result = calculator.add(val1, val2);
      break;
    case 'subtract':
      result = calculator.subtract(val1, val2);
      break;
    case 'multiply':
      result = calculator.multiply(val1, val2);
      break;
    case 'divide':
      result = calculator.divide(val1, val2);
      break;
    default:
      return res.status(400).send({ error: 'Unknown operation' });
  }

  res.send({ result });
});

app.listen(3000, () => {
  console.log("API has started on port 3000");
});
