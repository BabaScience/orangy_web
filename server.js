const express = require('express');
const app = express();
const path = require('path');

// Set the views directory
app.use(express.static(path.join(__dirname, 'public')));
// Set the view engine to use EJS templates
/* app.set('view engine', 'ejs'); */

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Define a route to display the policy page
app.get('/policy', (req, res) => {
  // Render the policy.ejs template
    res.sendFile(__dirname + '/views/policy.html');
});


const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
  console.log('Server is running on port 3000');
});
