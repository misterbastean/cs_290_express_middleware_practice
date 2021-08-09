const user = {
  username: 'shaquille.oatmeal',
  email: 'shaquille.oatmeal@gmail.com',
  firstName: 'Shaquille',
  lastName: 'Oatmeal',
};

// Create your middleware here
// It should pass the user object above so that it can be accessed on the req object

// Remember what 3 parameters a middleware function needs?
const addUser = () => {
  console.log('update me!');
};

// Don't forget to export it here!
