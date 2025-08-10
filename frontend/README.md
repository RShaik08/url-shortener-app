URL Shortener App
Description
This is a full-stack URL shortening application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to submit long URLs and receive a shortened, unique link. When the shortened link is visited, it redirects the user to the original long URL.

Features
Core
Submit URL: A user-friendly form on the homepage to input a long URL.

Generate Short Code: The backend generates a unique, short code for each URL.

Redirect: Visiting the short URL redirects the user to the original long URL.

Bonus
Admin Dashboard: An API endpoint that retrieves a list of all shortened URLs.

Visit Tracking: Tracks and counts how many times each shortened URL has been visited.

Tech Stack
Frontend: React

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Dependencies: shortid, dotenv, nodemon, cors

Getting Started
Follow these steps to set up and run the application locally.

Prerequisites
Node.js (LTS version recommended)

MongoDB Atlas account

1. Clone the Repository
Bash

git clone https://github.com/RShaik08/url-shortener-app.git
cd url-shortener-app
2. Backend Setup
Navigate to the backend directory, install dependencies, and configure your database.

Bash

cd backend
npm install
Database Configuration:
Create a file named .env in the backend directory and add your MongoDB connection string.

Code snippet

# .env file in the backend folder
MONGO_URI='mongodb+srv://<username>:<password>@<your_cluster_url>/urlshortener?retryWrites=true&w=majority'
3. Frontend Setup
Navigate to the frontend directory and install dependencies.

Bash

cd ../frontend
npm install
4. Running the Application
Open two separate terminal windows.

Terminal 1: Start the Backend Server

Bash

cd backend
npm run server
Terminal 2: Start the React Frontend

Bash

cd frontend
npm start
The application will be accessible at http://localhost:3000.

API Routes
Endpoint	Method	Description
/api/shorten	POST	Creates a new shortened URL.
/:shortcode	GET	Redirects to the original URL.
/api/urls	GET	(Bonus) Fetches all shortened URLs for admin use.

