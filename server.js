// Description: This is the entry point of the application. Where we require the app on our server and listen to the port.

//DEPENDENCIES
const app = require("./app.js");

//CONFIGURATION
const PORT = 3003;

//LISTENER
app.listen(PORT, () => {
  console.log(`Server is listening on port${PORT}`);
});
