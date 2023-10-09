//keep only server start code

const app = require("./src/app");   // creating express server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);  //${process.env
}) 