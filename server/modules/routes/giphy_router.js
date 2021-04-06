const express = require( 'express' );
const router = express.Router();
// axios on server
const axios = require( 'axios' );
// allows a connection to .env file
require( 'dotenv' ).config();

router.get( '/', ( req, res )=>{
    console.log( '/giphy GET' );
    // make an API call to giphy's server with our API key
    axios.get( `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=10` ).then( ( response )=>{
        res.send( response.data );
    }).catch( ( err )=>{
        console.log( err );
        res.send( 500 );
    })
})
module.exports = router;