Topin TCP Demo
This repository contains a demo application for handling Topin protocol messages via TCP. It includes a server that listens for TCP messages and a test client to simulate sending messages. This setup can be used to test and develop applications that communicate with GPS devices using the Topin protocol.

Project Structure
server.js: A Node.js script that sets up a TCP server to receive and process Topin protocol messages.
client.js: A Node.js script that simulates a GPS device by sending Topin protocol messages to the server.
Getting Started
Prerequisites
Node.js and npm installed on your machine. You can download Node.js from nodejs.org.
Installation
Clone the Repository


`git clone https://github.com/Codename-404/topin_tcp_demo.git
cd topin_tcp_demo`
Install Dependencies

This project does not have any additional dependencies beyond Node.js itself. Simply ensure you have Node.js installed.

Running the Server
Navigate to the Project Directory

`cd topin_tcp_demo
Start the Server`


`node server.js`
The server will start listening for TCP connections on port 5000 by default. You can change the port in server.js if needed.

Running the Client
In a New Terminal Window

Ensure the server is running before starting the client.

Start the Client

`node client.js`
The client will connect to the server and send a simulated Topin protocol message. Adjust the message format in client.js to match your specific requirements.

Testing with Actual GPS Devices
If you wish to test with an actual GPS device:

Configure the Device

Ensure your GPS device is set up to send Topin protocol messages to the IP address and port where your server is running.

Adapt the Code

The message structure might vary depending on the GPS device. If you need help adapting the server to handle specific message formats, please contact me.

Example Usage
Simulated Message
The client sends a message in the following format:


IMEI:123456789012345;LAT:23.8103;LON:90.4125;SPEED:60;TIME:2024-09-19T10:30:00.000Z
Server Output
Upon receiving a message, the server logs the data:


Received from client: IMEI:123456789012345;LAT:23.8103;LON:90.4125;SPEED:60;TIME:2024-09-19T10:30:00.000Z
Contact
For support with adapting the code to specific GPS devices or any other inquiries, please reach out to me directly.

Nayeemur Rahman
IBM Certified Full Stack Developer
