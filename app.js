// Node.js Code in the Project
// app.js is entirely Node.js code. This is where the Express.js server is configured, 
// routes are defined, and interactions between the client and server are handled.
//
// echo "# todo-app" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/rogerlu88/todo-app.git
// git push -u origin main
//


const express = require('express');      // Importing the Express framework
const bodyParser = require('body-parser'); // Importing body-parser middleware for handling form data

const app = express(); // Initializing an Express app
const port = 3000;     // Setting the port the server will listen on

app.set('view engine', 'ejs');                          // Setting EJS as the template engine for rendering HTML
app.use(bodyParser.urlencoded({ extended: true }));     // Using body-parser to parse form data
app.use(express.static('public'));          // Serving static files (like CSS and JS) from the 'public' directory

let tasks = [];                     // Array to store tasks in memory (can be expanded to database storage)

// Route to handle GET requests to the homepage
app.get('/', (req, res) => {
    res.render('index', { taskList: tasks });           // Rendering 'index.ejs' template with tasks
});

// Route to handle POST requests when a new task is added
app.post('/add', (req, res) => {
    const task = req.body.newTask;                      // Getting the task from the request body
    tasks.push(task);                                   // Adding the new task to the list
    res.redirect('/');                                  // Redirecting back to the home page
});

// Route to handle POST requests for deleting a task
app.post('/delete', (req, res) => {
    const taskIndex = req.body.taskIndex;           // Getting the task index from the form
    tasks.splice(taskIndex, 1);                     // Removing the task from the list
    res.redirect('/');                              // Redirecting back to the home page
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);  // Logging a message when the server starts
});
