Google Analytics with react-router
----------------------------------
Running Google Analytics only in production environment with react-router.

In the index.js file, the following lines of code makes sure it only runs when
compiled with the environment variable REACT_APP_TARGET set to 'deploy'.

    if (process.env.REACT_APP_TARGET === 'deploy') {
      ReactGA.initialize('UA-######-#')
    }

You can test this locally by starting the development server using:

    REACT_APP_TARGET=deploy npm start
