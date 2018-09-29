import express from 'express';
import serveStatic from 'serve-static';
import { join } from 'path';
import secure from 'express-force-https';
// create the express app
const app = express()
app.use(secure)
// create middleware to handle the serving the app
app.use("/", serveStatic ( join (__dirname, '/dist') ) )
// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)
