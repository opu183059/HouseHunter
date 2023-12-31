const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
// middlewire
app.use(cors());
app.use(express.json());

// mongodb
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ljsyrma.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const UsersData = client.db("HouseHunter").collection("user");
    const RoomData = client.db("HouseHunter").collection("rooms");
    const BookingData = client.db("HouseHunter").collection("bookings");

    // Register new user
    app.post("/users/:email", async (req, res) => {
      const email = req.params.email;
      const { name, password, role, mobile } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const updateUser = {
        name,
        email,
        role,
        mobile,
        password: hashedPassword,
      };
      const query = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: updateUser,
      };
      const result = await UsersData.updateOne(query, updateDoc, options);
      res.json(result);
    });

    // Login
    app.post("/login", async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await UsersData.findOne({ email });
        if (!user) {
          res.status(404).json({ message: "User not found" });
          return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          res.status(401).json({ message: "Invalid credentials" });
          return;
        }
        // res.status(200).json({ message: "Login successful" });
        return res.status(200).json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // Get houses
    app.get("/houses", async (req, res) => {
      const result = await RoomData.find({}).sort({ createdAt: -1 }).toArray();
      res.json(result);
    });

    // Owners Add rooms
    app.post("/addRoom", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();

      const result = await RoomData.insertOne(body);

      res.json(result);
    });
    // Owner Houses
    app.get("/myHouses/:email", async (req, res) => {
      const result = await RoomData.find({ email: req.params.email })
        .sort({ createdAt: -1 })
        .toArray();
      res.json(result);
    });
    // Get house info
    app.get("/houseInformation/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await RoomData.findOne(query);
      res.json(result);
    });

    // Update house Info
    app.put("/houseUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      // const option = { upsert: true };
      const updatedHouse = req.body;
      const updatedHouseinformation = {
        $set: {
          name: updatedHouse.name,
          email: updatedHouse.email,
          address: updatedHouse.address,
          mobile: updatedHouse.mobile,
          bathroom: updatedHouse.bathroom,
          bedroom: updatedHouse.bedroom,
          city: updatedHouse.city,
          roomsize: updatedHouse.roomsize,
          available: updatedHouse.available,
          rent: updatedHouse.rent,
          photoURL: updatedHouse.photoURL,
          description: updatedHouse.description,
        },
      };
      const result = await RoomData.updateOne(query, updatedHouseinformation);
      res.json(result);
    });

    // Delete House
    app.delete("/houseDelete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await RoomData.deleteOne(query);
      res.json(result);
    });

    // Booking house
    app.post("/bookHouse", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();
      const result = await BookingData.insertOne(body);
      res.json(result);
    });
    // Renter Bookings
    app.get("/mybookings/:email", async (req, res) => {
      const result = await BookingData.find({ renteremail: req.params.email })
        .sort({ createdAt: -1 })
        .toArray();
      res.json(result);
    });
    // Delete bookings
    app.delete("/bookingDelete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await BookingData.deleteOne(query);
      res.json(result);
    });
    // Houser owner Bookings
    app.get("/ownerBookings/:email", async (req, res) => {
      const result = await BookingData.find({ owneremail: req.params.email })
        .sort({ createdAt: -1 })
        .toArray();
      res.json(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(`House Hunter server is running on port: ${port}`);
});

app.listen(port, () => {
  console.log("House Hunter server is running");
});
