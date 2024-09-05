const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);


// test route for routes/index.js (this file)
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route routes/index/hello/world!');
});


// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  // console.log('line 18 from backend routes/index.js')
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}



// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {

    // console.log("!!!!!!!!!!! the first /api/csrf/restore from routes/index.js !!!!!!!!!!!!")

    const csrfToken = req.csrfToken();
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.status(200).json({
      'XSRF-Token': csrfToken
    });
    // return res.json({}); // please keep this commented out
  });
}


// // Add a XSRF-TOKEN cookie if in production?
// router.get("/api/csrf/restore", (req, res) => {

//   // console.log("!!!!!!!!!!! the second /api/csrf/restore from routes/index.js !!!!!!!!!!!!")

//   const csrfToken = req.csrfToken();

//   // console.log("req.csrfToken() : ", req.csrfToken());

//   res.cookie("XSRF-TOKEN", csrfToken);
//   res.status(200).json({
//     'XSRF-Token': csrfToken
//   });
// });

module.exports = router;
