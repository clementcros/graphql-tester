import Express from "express";

const app = Express();

const PORT = 3001;

app.get("/", (req, res) => res.send("Hello World !"));

app.get("/products", (req, res) =>
    res.status(200).json([{ test: "toto" }, { test: "hello" }])
);

app.get("/name", (req, res) => res.status(200).json("gabin"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
