// express web server implementation

// import express
import express from 'express';
import calculator from './util.js';

const app = express();
// use json middleware
app.use(express.json());

app.post("/api/add", async (req,res) => {
    const { val1, val2 } = req.body;
    const result = calculator.add(val1, val2);
    res.send({ result });
});

app.post("/api/subtract", async (req,res) => {
    const { val1, val2 } = req.body;
    const result = calculator.subtract(val1, val2);
    res.send({ result });
});

app.post("/api/multiply", async (req,res) => {
    const { val1, val2 } = req.body;
    const result = calculator.multiply(val1, val2);
    res.send({ result });
});

app.post("/api/divide", async (req,res) => {
    const { val1, val2 } = req.body;
    const result = calculator.divide(val1, val2);
    res.send({ result });
});

app.post("/api/power", async (req,res) => {
    const { val1, val2 } = req.body;
    const result = calculator.power(val1, val2);
    res.send({ result });
});

app.post("/api/modulo", async (req,res) => {
    const { val1, val2 } = req.body;
    const result = calculator.modulo(val1, val2);
    res.send({ result });
});

app.listen(3000, () => {
    console.log("API has started on port 3000");
});
