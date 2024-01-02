# My-Notes [![Netlify Status](https://api.netlify.com/api/v1/badges/8911e08a-5634-461f-9327-de4a05b939a2/deploy-status)](https://app.netlify.com/sites/notes-pythonpioneer/deploys)

Introducing our note-taking app to capture your to-dos and inspirational quotes before they slip out of your mind. With this app, you can effortlessly create and organize notes, making it easy to retrieve them later on any device. Utilize the search function to find notes based on title, description, tags, and by all. Additionally, sort your notes seamlessly by the newest or oldest entry, ensuring a streamlined and efficient experience. Never let a brilliant idea or important task slip away – stay organized with our intuitive note app.

```
Here is a dummy login user login information

email: hrk@gmail.com
password: hrk123@
```

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

- Create a `.env` file and copy the content of `.env.sample` into this
  
      touch .env

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
