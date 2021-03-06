const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const giphy = require( './modules/routes/giphy_router' )
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));
app.use('/giphy', giphy )
/** ---------- EXPRESS ROUTES ---------- **/


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});