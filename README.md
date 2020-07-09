Web Server Playground
===
## Getting Started
Before you begin, make sure you have `python3` installed. 
You can use whatever server you'd like, but python
will get you going the quickest.

To start the website, simply open a terminal/command prompt window
at the root of this directory:


### Unix:
```sh
Tristans-MacBook-Pro-2:WebServerPlayground$ pwd
/Users/tristankellar/Documents/WebServerPlayground
Tristans-MacBook-Pro-2:WebServerPlayground$ python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

### Windows:
```sh
C:\Users\tristankellar\WebServerPlayground> cd
C:\Users\tristankellar\WebServerPlayground

C:\Users\tristankellar\WebServerPlayground> python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

## What's going on?
Once the command runs, you have just started a static file server 
at the root of this directory. If you go to a web browser and navigate
to `localhost:8000/`, you will see the `index.html` display. From here,
you can add css, JavaScript, and other pages to link to the homepage.