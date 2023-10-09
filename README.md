# My-Notes

This note app helps you to make notes of things you want to do or any inspirational quotes that you want to note before you forget. You can personalize the app note using tag options. You can sort your notes based on time or based on tags and many more sorting options.

## License

Before you start contributing to this project, please review the [LICENSE](https://github.com/pythonpioneer/my-notes-frontend/blob/master/LICENSE) file to understand the licensing terms. By contributing to this project, you agree to abide by its terms.

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

- Create a `.env.local file`
  
      touch .env.local

- Create a environment variable for backend host network (or your backend-host-network)
  
      REACT_APP_HOST=http://localhost:3100

    > copy this line and paste it inside `.env.local`

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

      npm start
  **Note:** If the app didn't run with the given command then please explore nodemon for your machine.
  
- It will open your browser(http://localhost:3100)


## Note

The app is built on top of [Create React App](https://github.com/facebook/create-react-app), which means all features that create-react-app supports are available.


## To Contribute

To contribute, go to the [contributing.md file](https://github.com/pythonpioneer/pythonpioneer/blob/main/guidelines/CONTRIBUTING.md). I will appreciate your efforts.
