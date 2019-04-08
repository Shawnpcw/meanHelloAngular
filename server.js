const xp = require("express");
const path = require('path');
const bp = require('body-parser')
const router = require("./server/routes.js");



const app = xp();
app.use(xp.static( __dirname + '/public/dist/public' ));


router(app)

app.listen(8000, (errs)=>console.log(errs?errs:'gucci'));

