<h1 align="center">🏢 Building Control System</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue">
  <img src="https://img.shields.io/badge/Backend-Node.js-green">
  <img src="https://img.shields.io/badge/Database-MySQL-yellow">
  <img src="https://img.shields.io/badge/Testing-Jest-red">
</p>

<p align="center">A full-stack application to manage building data, including temperature control, adding, editing, and deleting buildings. The backend supports CRUD operations and stores data in a MySQL database, while the frontend provides a sleek UI for user interactions.</p>

---

<h2>🚀 Features</h2>
<ul>
  <li>🌡️ Temperature Control: Monitor and adjust building temperatures</li>
  <li>✨ Add Buildings: Enter name, temperature, location, and status</li>
  <li>👀 View Buildings: See a list of all buildings with real-time updates</li>
  <li>✏️ Edit Buildings: Modify building details easily</li>
  <li>🗑️ Delete Buildings: Remove unwanted buildings with a single click</li>
  <li>💾 Persistent Storage: Data is securely stored in a MySQL database</li>
</ul>

---

<h2>🛠 Technologies Used</h2>

<h3>Frontend</h3>
<ul>
  <li>⚛️ <strong>React with TypeScript</strong></li>
  <li>🌐 <strong>Axios for API calls</strong></li>
  <li>🎨 <strong>CSS for styling</strong></li>
  <li>🧪 <strong>Jest & Testing Library</strong></li>
</ul>

<h3>Backend</h3>
<ul>
  <li>🟩 <strong>Node.js</strong></li>
  <li>⚡ <strong>Express</strong></li>
  <li>📘 <strong>TypeScript</strong></li>
  <li>🛢 <strong>MySQL</strong></li>
  <li>🧪 <strong>Jest</strong></li>
</ul>

---

<h2>📦 Step-by-Step Setup Guide</h2>

<h3>1. Prerequisites</h3>
<ul>
  <li>🟢 Node.js (v14 or higher)</li>
  <li>🗄️ MySQL (v8.0 or higher)</li>
  <li>📥 Git</li>
</ul>

<h3>2. Clone the Repository</h3>
<pre><code>git clone https://github.com/aleber123/building-control.git
cd building-control</code></pre>

<h3>3. Database Setup</h3>
<p>1. Start MySQL server:</p>
<pre><code>mysql.server start</code></pre>

<p>2. Log into MySQL:</p>
<pre><code>mysql -u root -p</code></pre>

<p>3. In the MySQL prompt, run:</p>
<pre><code>CREATE DATABASE building_control;

USE building_control;

CREATE TABLE buildings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    temperature FLOAT,
    location VARCHAR(255),
    status VARCHAR(50)
);</code></pre>

<h3>4. Backend Setup</h3>
<p>1. Navigate to backend directory and install dependencies:</p>
<pre><code>cd building-control-backend
npm install</code></pre>

<p>2. Create a <code>.env</code> file in the backend directory:</p>
<pre><code>DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=building_control</code></pre>

<p>3. Start the backend server:</p>
<pre><code>npm start</code></pre>
<p>The backend should now be running on <code>http://localhost:3001</code></p>

<h3>5. Frontend Setup</h3>
<p>1. Open a new terminal and navigate to frontend directory:</p>
<pre><code>cd building-control-frontend
npm install</code></pre>

<p>2. Start the frontend application:</p>
<pre><code>npm start</code></pre>
<p>The frontend should now be running on <code>http://localhost:3000</code></p>

<h3>6. Verify Setup</h3>
<ol>
  <li>Open <code>http://localhost:3000</code> in your browser</li>
  <li>You should see the Building Control interface</li>
  <li>Try adding a new building to test if everything is working</li>
</ol>

---

<h2>🔍 Troubleshooting Common Issues</h2>

<h3>Backend Connection Error</h3>
<p>If you see "Network Error" in the frontend:</p>
<ol>
  <li>Check if backend is running on port 3001</li>
  <li>Verify MySQL is running: <code>mysql.server status</code></li>
  <li>Check your .env file configuration</li>
  <li>Ensure no other application is using port 3001</li>
</ol>

<h3>Database Connection Issues</h3>
<ol>
  <li>Verify MySQL is running: <code>mysql.server status</code></li>
  <li>Check your MySQL credentials in .env file</li>
  <li>Ensure the building_control database exists</li>
  <li>Verify the buildings table was created correctly</li>
</ol>

---

<h2>🧪 Testing</h2>

<p>Run tests using these commands:</p>

<pre><code># Frontend tests
cd building-control-frontend
npm test

# Backend tests
cd building-control-backend
npm test</code></pre>

---

<h2>📫 Support</h2>
<p>If you encounter any issues, please open an issue on GitHub or contact the maintainers.</p>
