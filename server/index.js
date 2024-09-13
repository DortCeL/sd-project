const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
	res.send("Hello from Node API Server Updated");
});

mongoose
	.connect(
		"mongodb+srv://DortCeL:eitaipassword@learning-backend.eemuwzl.mongodb.net/Gamebook?retryWrites=true&w=majority&appName=Learning-Backend"
	)
	.then(() => {
		console.log("Connected to database!");
		app.listen(3000, () => {
			console.log("Server is running on port 3000");
		});
	})
	.catch(() => {
		console.log("Connection failed!");
	});
