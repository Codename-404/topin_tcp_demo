const net = require("net");

// Server details
const HOST = "localhost";
const PORT = 5005;

const gpsMessage = `IMEI:123456789012345;LAT:23.8103;LON:90.4125;SPEED:60;TIME:${new Date().toISOString()}`;

// Create a client and connect to the server
const client = new net.Socket();
client.connect(PORT, HOST, () => {
  console.log("Connected to the GPS server");

  // Send the GPS message to the server
  client.write(gpsMessage);
  console.log("Sent message:", gpsMessage);
});

// Handle data received from the server
client.on("data", (data) => {
  console.log("Received from server:", data.toString());

  // Close the connection after receiving a response
  client.destroy();
});

// Handle connection closed by the server
client.on("close", () => {
  console.log("Client Connection closed");
});

// Handle any error that occurs during the connection
client.on("error", (err) => {
  console.error("Error:", err.message);
});
