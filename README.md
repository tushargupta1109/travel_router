# Travel Router

A interesting way to find Hotels,Restaurants and Attractions arround us or in any other place.You can filter between places by their ratings and types and can do these filter by giving command to virtual assistant Alan.

> ## Preview

> ### ![Homepage](images/home.png)

> ### ![Favourites](images/favourites.png)

> ### ![filteredPlaces](images/filteredplaces.png)

## Overview

- ### Pages:

  - **Home Page**

    - It shows list and map of places and a header containing various buttons

  - **SignIn Page**

    - Sign in with Google button.

## **Starting the Dev Server**

- Clone the repository to your local system. `https://github.com/tushargupta1109/travel_router`

- Firebase API Setup:

  1.  Go to [Firebase Console](https://console.firebase.google.com) and follow the steps to create a new Firebase project.
  2.  Select `</>` , _Add a project via Code_.

  3.  Create a new web app using the steps provided on the console.

  4.  You will recieve a firebasConfig object with the first paramter as API key. Copy it, which will look something like:

      ```js
              cosnt firebaseConfig = {
              apiKey: "process.env.REACT_APP_FIREBASE",
              authDomain: "AUTH_DOMAIN",
              projectId: "PROJECT_ID",
              storageBucket: "STORAGE_BUCKET",
              messagingSenderId: "*************",
              appId: "******************************",
              measurementId: "*************"
            };
      ```

  5.  After you get the Firebase API key, create a .env file in the root folder of the repository

  6.  Insert the folowing snippet in the file

           REACT_APP_FIREBASE="API_KEY_HERE"

- Rapid API Setup:

  1.  Go to the following link and set up a new project from <https://rapidapi.com/hub>

  2.  Get the Api key

  3.  A new API key will be generated. Copy it in the .env file.

               REACT_APP_RAPIDAPI_KEY="API_KEY_HERE"

- Google Maps API Setup

  1.  Go to the following link and set up a new project from <https://developers.google.com/maps/apis-by-platform>

  2.  Get the Api key

  3.  A new API key will be generated. Copy it in the .env file.

               REACT_APP_GOOGLE_MAPS_API_KEY
               ="API_KEY_HERE"

- Ensure that .env is added in .gitignore file.

- In the root folder and enter the following commands in the CLI

          npm i or yarn
          npm start or yarn start

- If you wish to contribute, either look for issues already created or create an issue if you have a new idea.
  <br/>
