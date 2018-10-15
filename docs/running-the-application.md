# Running the application

Use the Aurelia CLI to run the application:

```bash
$ au run
```

This will run a local server at `http://localhost:8080` (unless you have another process bound to that port).

Otherwise, you should be able to navigate to this address in your browser of choice:

TODO: Update images
![Chrome](./images/hello-world.png)

This project has Live Reload set up, so when you save a file change, it will trigger a reload in your browser:

TODO: Update images
![Live Reload](./images/live-reload.gif)

## Resetting the database

You'll likely need to reset the database at some point - you can do so by running `repopulate()` in your browser DevTools/JavaScript console and then reload the page.

