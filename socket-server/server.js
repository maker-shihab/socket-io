require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const authRoutes = require('./app/routes/authRoutes');
const messageRoutes = require('./app/routes/messageRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

//Testing
app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Socket.IO!",
  });
});

// MongoDB connection
mongoose.connect(process.env.DATABASE_URL);

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});