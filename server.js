const net = require("net");

// Define the port where the server will listen for connections
const PORT = 5005;

// Create a server instance
const server = net.createServer((socket) => {
  console.log("New device connected");

  // Event handler for receiving data from the client (GPS tracker)
  socket.on("data", (data) => {
    // Convert the binary data (Buffer) to a string
    const message = data.toString();
    console.log("Received data:", message);

    // Decoding the Topin protocol message here depending on the message structure
    // let's discuss further for this step and how would you like to add more functionalities

    // For now, send a response to the GPS device
    socket.write("Found You!");
  });

  // Handle connection errors
  socket.on("error", (err) => {
    console.error("Connection error:", err);
  });

  // Handle connection closure
  socket.on("close", () => {
    console.log("Client Connection closed");
  });
});

// Start listening for connections
server.listen(PORT, () => {
  console.log(`GPS server listening on port ${PORT}`);
});
