require("dotenv").config()
const app = require("./index")
console.log(app)

let listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
