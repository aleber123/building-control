<h1 align="center">🏢 Building Control System</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue">
  <img src="https://img.shields.io/badge/Backend-Node.js-green">
  <img src="https://img.shields.io/badge/Database-MySQL-yellow">
  <img src="https://img.shields.io/badge/License-MIT-lightgrey">
</p>

<p align="center">A full-stack application to manage building data, including adding, editing, and deleting buildings. The backend supports CRUD operations and stores data in a MySQL database, while the frontend provides a sleek UI for user interactions.</p>

---

<h2>🚀 Features</h2>
<ul>
  <li>✅ Add Buildings: Enter name, temperature, location, and status.</li>
  <li>✅ View Buildings: See a list of all buildings with real-time updates.</li>
  <li>✅ Edit Buildings: Modify building details easily.</li>
  <li>✅ Delete Buildings: Remove unwanted buildings with a single click.</li>
  <li>✅ Persistent Storage: Data is securely stored in a MySQL database.</li>
</ul>

---

<h2>🛠 Technologies Used</h2>

<h3>Frontend</h3>
<ul>
  <li>⚛️ <strong>React</strong></li>
  <li>📘 <strong>TypeScript</strong></li>
  <li>🌐 <strong>Axios</strong></li>
</ul>

<h3>Backend</h3>
<ul>
  <li>🟩 <strong>Node.js</strong></li>
  <li>⚡ <strong>Express</strong></li>
  <li>📘 <strong>TypeScript</strong></li>
  <li>🛢 <strong>MySQL</strong></li>
</ul>

---

<h2>📦 Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Install <a href="https://nodejs.org/" target="_blank">Node.js</a></li>
  <li>Install <a href="https://dev.mysql.com/downloads/" target="_blank">MySQL</a></li>
  <li>Install <a href="https://git-scm.com/" target="_blank">Git</a></li>
</ul>

<h3>Installation</h3>
<ol>
  <li><strong>Clone the Repository</strong></li>
  <pre><code>git clone https://github.com/aleber123/building-control.git
cd building-control
</code></pre>
  <li><strong>Install Backend Dependencies</strong></li>
  <pre><code>npm install</code></pre>
  <li><strong>Set Up MySQL Database</strong></li>
  <pre><code>
CREATE DATABASE building_control;

USE building_control;

CREATE TABLE buildings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  temperature FLOAT,
  location VARCHAR(255),
  status VARCHAR(50)
);
</code></pre>
  <li><strong>Start the Backend Server</strong></li>
  <pre><code>npm run dev</code></pre>
  <li><strong>Set Up and Start the Frontend</strong></li>
  <pre><code>cd building-control-frontend
npm install
npm run dev
</code></pre>
</ol>

---

<h2>🌐 API Endpoints</h2>

<h3>Base URL: <code>http://localhost:3001</code></h3>

<p>This application implements a <strong>REST API</strong> to handle CRUD operations for buildings. The RESTful design follows resource-oriented principles for efficient data handling.</p>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/buildings</code></td>
    <td>Fetch all buildings</td>
  </tr>
  <tr>
    <td>POST</td>
    <td><code>/buildings</code></td>
    <td>Create a new building</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td><code>/buildings/:id</code></td>
    <td>Update a building by ID</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td><code>/buildings/:id</code></td>
    <td>Delete a building by ID</td>
  </tr>
</table>

---

<h2>🧪 Testing</h2>

<p><strong>Run Unit Tests:</strong></p>
<pre><code>npx jest</code></pre>

---

<h2>🤝 Contributing</h2>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch: <code>git checkout -b feature/AmazingFeature</code></li>
  <li>Commit your changes: <code>git commit -m "Add some AmazingFeature"</code></li>
  <li>Push to the branch: <code>git push origin feature/AmazingFeature</code></li>
  <li>Open a pull request.</li>
</ol>

---

<h2>🎨 Preview</h2>
<p>Replace the placeholder image below with an actual screenshot of your application:</p>
<img src="https://via.placeholder.com/800x400.png?text=Project+Preview" alt="Project Preview">
