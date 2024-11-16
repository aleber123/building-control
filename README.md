Building Control System
Features
Add a new building with details like name, temperature, location, and status.
View a list of all buildings.
Edit a building's details.
Delete a building.
Persist building data in a MySQL database.
Technologies Used
Frontend
React
TypeScript
Axios
Backend
Node.js
Express
TypeScript
MySQL
Getting Started
Prerequisites
Install Node.js
Install MySQL
Install Git
Installation
Clone the Repository

bash
Kopiera kod
git clone https://github.com/aleber123/building-control.git
cd building-control
Install Dependencies

bash
Kopiera kod
npm install
Set Up MySQL Database

sql
Kopiera kod
mysql -u root -p
CREATE DATABASE building_control;
USE building_control;
CREATE TABLE buildings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    temperature FLOAT,
    location VARCHAR(255),
    status VARCHAR(50)
);
Running the Application
Backend
bash
Kopiera kod
cd building-control
npm run dev
The server will run at http://localhost:3001.

Frontend
bash
Kopiera kod
cd building-control-frontend
npm run dev
The frontend will run at http://localhost:3000.

API Endpoints
Base URL: http://localhost:3001

GET /buildings: Fetch all buildings.
POST /buildings: Create a new building.
PUT /buildings/
: Update a building by ID.
DELETE /buildings/
: Delete a building by ID.
Testing
To run unit tests:

bash
Kopiera kod
npx jest
Deployment
Build and deploy the frontend using platforms like:

Vercel
Netlify
Contributing
Fork the repository.
Create your feature branch:
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
License
This project is licensed under the MIT License.

© 2024 Building Control System
