// DEPENDECIES
const app = require("./app");

// CONFIGURATION
const PORT = 3003;

// LISTEN
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
