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
