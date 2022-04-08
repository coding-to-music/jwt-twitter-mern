# jwt-twitter-mern

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/jwt-twitter-mern

https://jwt-twitter-mern.herokuapp.com

by Andrew Bateman https://github.com/AndrewJBateman

https://github.com/AndrewJBateman/jwt-twitter-mern

Start server : `npm start`

Start client : `cd client` + `npm start`

---

### Back config :

- Put your cluster info inside `/config/db.js`
- Create `.env` file inside `/config/` within the following data
  - PORT=5000 `your localhost port`
  - CLIENT_URL=http://localhost:3000 `your client url`
  - DB_USER_PASS=fs:fromscratch `your ID & password`
  - TOKEN_SECRET=990bf68e6adf1be5f1671bba3bec692056922454 `your random secret key`

* Node.js routes used with controller functions
* ![Nodejs diagram](./client/public/img/diagram.png)

---

### Front config :

- Create a `.env` file within the server URL :
  - REACT_APP_API_URL=http://localhost:5000/ `your server url`

---

![Alt text](./client/public/img/screenshot.jpg "Screenshot")

💻 Made by Julien Az, November 2020. Free to use

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/jwt-twitter-mern.git
git push -u origin main
```

## Heroku

```java
heroku create jwt-twitter-mern
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set PUBLIC_URL="https://jwt-twitter-mern.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/jwt-twitter-mern/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/jwt-twitter-mern/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
