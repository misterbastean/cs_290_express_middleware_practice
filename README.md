# Instructions

Clone this repo to your local machine [click here if you're not sure how to do this](https://youtu.be/c4b1MjJclBU). Then complete the following two activities.

## Add User Middleware

In the `/middleware/addUser.js` file, create a middleware function that makes the `user` object available on the `req` object for all routes. Test by going to the private route in your browser. You should see a JSON response of the user data, as well as seeing it printed in the console.

## Count Hits Middleware

In the `/middleware/countHits.js` file, create a middleware function that increments the `hits` variable by 1 and logs it to the console. Test by refreshing the route in your browser. Note that this number will reset to 0 every time you restart your server, and that’s fine.
