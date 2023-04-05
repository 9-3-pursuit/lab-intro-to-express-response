//Dependencies
const app = require('../app.js')

//Configuration
const PORT = 3003

//Listen
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);

});