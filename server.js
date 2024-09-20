require("dotenv").config();
const { default: axios } = require("axios");
const net = require("net");
const express = require("express");

// Define the port where the server will listen for connections
const PORT = 5005;

// Create a server instance
// const server = net.createServer((socket) => {
//   console.log("New device connected");

//   // Event handler for receiving data from the client (GPS tracker)
//   socket.on("data", (data) => {
//     // Convert the binary data (Buffer) to a string
//     const message = data.toString();
//     console.log("Received data:", message);

//     // Decoding the Topin protocol message here depending on the message structure
//     // let's discuss further for this step

//     // For now, send a response to the GPS device
//     socket.write("Found You!");
//   });

//   // Handle connection errors
//   socket.on("error", (err) => {
//     console.error("Connection error:", err);
//   });

//   // Handle connection closure
//   socket.on("close", () => {
//     console.log("Client Connection closed");
//   });
// });

const fetchMessages = async () => {
  const url = `https://flespi.io/gw/channels/${process.env.CHANNEL_ID}/messages`;
  const token = process.env.TOKEN;

  console.log();
  const res = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `FlespiToken ${token}`,
    },
  });

  console.log(res.data);
  return res.data;
};

fetchMessages();
// Start listening for connections
// server.listen(PORT, () => {
//   console.log(`GPS server listening on port ${PORT}`);
// });

const app = express();

// Define a simple GET route
app.get("/", async (req, res) => {
  const data = await fetchMessages();

  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
