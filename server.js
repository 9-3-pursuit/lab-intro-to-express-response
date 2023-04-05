const app = require('./app.js') 
const PORT = 3003 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); 
})