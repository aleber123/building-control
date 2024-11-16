🏢 Building Control System

A full-stack application to manage building data, including adding, editing, and deleting buildings. The backend supports CRUD operations and stores data in a MySQL database, while the frontend provides a sleek UI for user interactions.

🚀 Features
Add Buildings: Enter name, temperature, location, and status.
View Buildings: See a list of all buildings with real-time updates.
Edit Buildings: Modify building details easily.
Delete Buildings: Remove unwanted buildings with a single click.
Persistent Storage: Data is securely stored in a MySQL database.
🛠 Technologies Used
Frontend
⚛️ React
📘 TypeScript
🌐 Axios
Backend
🟩 Node.js
⚡ Express
📘 TypeScript
🛢 MySQL
📦 Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js
MySQL
Git
⚙️ Installation
Clone the Repository

bash
Kopiera kod
git clone https://github.com/aleber123/building-control.git
cd building-control
Install Backend Dependencies

bash
Kopiera kod
npm install
Set Up MySQL Database

sql
Kopiera kod
CREATE DATABASE building_control;

USE building_control;

CREATE TABLE buildings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    temperature FLOAT,
    location VARCHAR(255),
    status VARCHAR(50)
);
Start the Backend Server

bash
Kopiera kod
npm run dev
Set Up and Start the Frontend

bash
Kopiera kod
cd building-control-frontend
npm install
npm run dev
🌐 API Endpoints
Base URL: http://localhost:3001

Method	Endpoint	Description
GET	/buildings	Fetch all buildings.
POST	/buildings	Create a new building.
PUT	/buildings/:id	Update a building by ID.
DELETE	/buildings/:id	Delete a building by ID.
🧪 Testing
To run the unit tests for the backend:

bash
Kopiera kod
npx jest
🌍 Deployment
Frontend Deployment
You can deploy the frontend using platforms like:

Vercel
Netlify
Backend Deployment
The backend can be deployed on:

Heroku
AWS
🤝 Contributing
Fork the repository.
Create a new branch for your feature:
bash
Kopiera kod
git checkout -b feature/AmazingFeature
Commit your changes:
bash
Kopiera kod
git commit -m "Add some AmazingFeature"
Push to the branch:
bash
Kopiera kod
git push origin feature/AmazingFeature
Open a pull request.
📜 License
This project is licensed under the MIT License.

🎨 Preview

This enhanced version of the README.md file includes:

Badges: To indicate technologies and license visually.
Icons/Emojis: To make sections stand out.
Table for API Endpoints: For a clean look.
Preview Image Placeholder: Replace the placeholder link with a screenshot of your app for added appeal.
