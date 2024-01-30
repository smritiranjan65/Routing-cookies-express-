express = require("express");
items = require("./route/item");
app = express();
port = 3000;

app.use(express.json())
app.use(express.urlencoded())


app.use('/', items)

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
})