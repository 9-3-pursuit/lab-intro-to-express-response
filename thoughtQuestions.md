// Thought questions

// 1. What is the difference between app.get and app.post?
// The difference between app.get and app.post is that app.get is used to retrieve data from the server, while app.post is used to send data to the server.

// 2. Is there a difference between '/timgunn', '/TimGunn', and '/tim/gunn'?
// Yes, there is a difference between '/timgunn', '/TimGunn', and '/tim/gunn'.
// The difference is that '/timgunn' and '/TimGunn' are the same route, while '/tim/gunn' is a different route.

// 3. What happens if we try to create the route '/tim gunn'?
// If we try to create the route '/tim gunn', we will get an error because the route is not valid.
// The route '/tim gunn' is not valid because it has a space in it.
// This is because the space is not a valid character in a route.

// app.get("/tim gunn", (req, res) => {
// res.send("Hello, Tim Gunn!");
// });

// This route will only match GET requests to the path '/tim%20gunn'.
// If a request is made to the path '/tim gunn', it will not match this route.
// Because it does not have the %20 in it.

app.get("/terminator", (req, res) => {
res.send("I'll be back!");

// error after this line was added
// because a response was already sent to the client
// express.js will throw an error if you try to send a response twice
// res.send("Hasta la vista, baby!");
});
