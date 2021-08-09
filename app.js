const express = require('express');
const app = express();

// ===============================
// DO NOT EDIT ABOVE THIS LINE!
// ===============================
// Import and use your middleware here
const addUser = require('./middleware/addUserSolution');
const countHits = require('./middleware/countHitsSolution');
app.use(addUser);
app.use(countHits);
// ===============================
// DO NOT EDIT BELOW THIS LINE!
// ===============================

app.get('/', (req, res) => {
  console.log('Hit the root route!');
  console.log('user:', req.user);
  res.json({
    message: "Here's your response!",
    user: req.user,
  });
});

app.listen(3000, () => {
  console.log('server listening on port 3000.');
});
