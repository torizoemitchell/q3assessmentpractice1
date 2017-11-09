# Galvanize React messages

## Read the entire README before beginning. Commit often.

## Important Note

This is a timed assessment.  You should be able to complete it in under 3 hours.  Remember to commit and push to your forked repository.  We will use the timestamps to evaluate how long it took.

## Project Description

The app is a REACT front end for the message board API built in (galvanize-message](https://github.com/gSchool/galvanize-message).  Your REACT app will interact with your deployed galvanize-message API.

## You are responsible for:

- [ ] Forking and cloning this GitHub Repo.  create-react-app has been run for you.
- [ ] Ensuring your galvanize-message API is up and running able to accept CORS request. 
Hint:
```
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

- [ ] Creating the React components to build a front end and properly interacting with the API
- [ ] Styling your components with bootstrap or materialize (note: this requires importing them into your App and adding appropriate classes to your HTML)
- Use immutable pattern when manipulating the state of the messages
- [ ] Add components to:
+ List all Messages displaying name, message.  Include a "Delete" icon or button next to the message.
+ Add a new Message (include a button to hide/show the compose form)
+ Delete a Message
+ Add a Toolbar at the top with a search filter and a display of the count of the messages.  The filter should work with the message and name attributes and reset to the original message list when it is cleared. 
+ Bonus: Add update functionality
+ Bonus: Use Redux for your state management
- [ ] Make a production build of your app and deploy the static assests to surge. 
Hint:
```
yarn run build
cd build
surge
```
