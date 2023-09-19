# My-Notes

This note app helps you to make notes of things you want to do or any inspirational quotes that you want to note before you forget. You can personalize the app note using tag options. You can sort your notes based on time or based on tags and many more sorting options.

## Getting Started

- Open your Terminal and go to the desired working directory
- Make a directory

      mkdir notes
  
- Go to the notes directory

      cd notes

- Now, follow the frontend setup


### FrontEnd Setup

- Clone the frontend repo

      git clone https://github.com/pythonpioneer/my-notes-frontend.git

- Go to your project folder and install dependencies (make sure you have npm and node)

  ```
  cd my-notes-frontend
  ```
  ```
  npm install
  ```

- After installation, To start the app

      npm start

- It will open your browser(http://localhost:3000)
  

### BackEnd Setup

- If you are in "my-notes-frontend" then go back to the previous directory.

      cd ..
  
- If not then open the notes directory.

      cd notes

- Clone the backend repo

      git clone https://github.com/pythonpioneer/my-notes-backend.git

- Go to your project folder and install dependencies (make sure you have npm and node)

  ```
  cd my-notes-backend
  ```
  ```
  npm install
  ```

- After installation, To start the app

      npx nodemon index.js
  **Note:** If the app didn't run with the given command then please explore nodemon for your machine.
  
- It will open your browser(http://localhost:3100)


## Note

The app is built on top of [Create React App](https://github.com/facebook/create-react-app), which means all features that create-react-app supports are available.


## To make Contribution

To contribute, go to the [contributing.md file](https://github.com/pythonpioneer/my-notes-frontend/blob/master/CONTRIBUTING.md). I will appreciate your efforts.

