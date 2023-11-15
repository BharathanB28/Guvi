const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Local variables to store data
let rooms = [
    {
        "roomId": 1,
        "roomName": "Conference Room A",
        "seats": 50,
        "amenities": ["projector", "whiteboard"],
        "pricePerHour": 100
      },
      {
        "roomId": 2,
        "roomName": "Conference Room B",
        "seats": 75,
        "amenities": ["projector", "whiteboard"],
        "pricePerHour": 150
      },
      {
        "roomId": 3,
        "roomName": "Conference Room C",
        "seats": 100,
        "amenities": ["projector", "whiteboard"],
        "pricePerHour": 200
      },
      {
        "roomId": 4,
        "roomName": "Conference Room D",
        "seats": 150,
        "amenities": ["projector", "whiteboard"],
        "pricePerHour": 300
      }
];
let bookings = [];



// API endpoints

app.get('/', (req, res) => {
    res.send('Hello, this is Bharathan, Welcome to your Node.js Hall Booking API!');
  });

// 1. Create a Room

app.get('/rooms', (req, res) => {
    res.json(rooms);
  });


// createRoom endpoint
app.post('/createRoom', (req, res) => {
  const { roomId,roomName, seats, amenities, pricePerHour } = req.body;

  // Check if the room already exists

  const existingId = rooms.find((room) => room.roomId === roomId);
  if (existingId) {
    return res.status(400).json({ error: 'Room with the same Id already exists' });
  }

  const existingRoom = rooms.find((room) => room.roomName === roomName);
  if (existingRoom) {
    return res.status(400).json({ error: 'Room with the same Name already exists' });
  }  

  const newRoom = {
    roomId,
    roomName,
    seats,
    amenities,
    pricePerHour,
  };

  rooms.push(newRoom);
  res.status(201).json({ message: 'Room created successfully', room: newRoom });  
});


// 2. Book a Room

app.post('/bookRoom', (req, res) => {
    const { customerName, date, startTime, endTime, roomId,roomName} = req.body;
  
    // Check if the room exists
    const room = rooms.find((r) => r.roomId === roomId);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
  
    // Check if the room is available for booking
    const isRoomAvailable = bookings.every((booking) => {
      return (
        booking.roomId !== roomId ||
        booking.date !== date ||
        (startTime >= booking.endTime || endTime <= booking.startTime)
      );
    });
    
  
    if (!isRoomAvailable) {
      return res.status(400).json({ error: 'Room is already booked for the specified date and time' });
    }
  
    const newBooking = {
      bookingId: bookings.length + 1,
      roomId,
      roomName,
      customerName,
      date,
      startTime,
      endTime
    };

    bookings.push(newBooking);   
  
    res.status(201).json({ message: 'Room booked successfully', booking: newBooking });
  });
  

// 3. List all Rooms with Booked Data
app.get('/listRooms', (req, res) => {
    const allRooms = rooms.map((room) => {
      const bookingsForRoom = bookings.filter((booking) => booking.roomId === room.roomId);
  
      if (bookingsForRoom.length > 0) {
        // Room is booked
        const bookedData = bookingsForRoom.map((booking) => {
          return {
            roomId: room.roomId,
            roomName: room.roomName,
            bookedStatus: 'Booked',
            customerName: booking.customerName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
          };
        });
        return bookedData;
      } else {
        // Room is available
        return {
          roomId: room.roomId,
          roomName: room.roomName,
          bookedStatus: 'Available',
        };
      }
    });
  
    res.status(200).json({ rooms: allRooms.flat()});
  });  


// 4. List all customers with booked data
app.get('/listCustomers', (req, res) => {
    const allBookings = bookings.map((booking) => {
      const room = rooms.find((r) => r.roomId === booking.roomId);
      return {
        customerName: booking.customerName,
        roomName: room.roomName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
      };
    });
  
    res.status(200).json({ customers: allBookings });
  });
  
 
// 5. List how many times a customer has booked the room
app.get('/customerBookings/:customerName', (req, res) => {
    const { customerName } = req.params;
  
    const customerBookings = bookings
    //   .filter((booking) => booking.customerName === customerName)
      .map((booking) => {
        const room = rooms.find((r) => r.roomId === booking.roomId);
        return {
            customerName: booking.customerName,
            roomName: room.roomName,
            BookingDate: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookingId: booking.bookingId,
            bookedStatus: 'Booked'          
        };
      });
  
    res.status(200).json({ customerBookings });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });