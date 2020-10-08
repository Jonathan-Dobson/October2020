# October 2020 User Authentication Full Stack Practice

### About the local development server:
The server does not use `http`. It uses `https` and `express`. It requires SSL certificate and keys that are stored elsewhere on the local machine. The start script will start node with a terminal command. The start command has a flag that will enable SSL. It will also be executed with a user named `nodejs` that is assigned to a group named `ssl-cert`. The commands have been written in the `package.json` file for now. The three commands are:

Start the server: runs server as user `nodejs` with a node flag for SSL.
        
    npm start

Restart: kills all processes with user `nodejs` then `npm start` again.
    
    npm run restart

Stop: kills all processes with user `nodejs`

    npm run kill

