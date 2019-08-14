// express serve back 'creation of cookie'
const app = require('express')();
app.get('/', (req, res) => {
  // set/send a cookie to user via 'setHeader'
  res.setHeader("set-cookie", ["setfromserver=9001"])
  res.sendFile(`${__dirname}/index.html`);

});

app.listen(8080, () => console.log('listening on port: 8080'));
