const express = require('express');
const app = express();
const port = 3000;
const admin = require('firebase-admin');

var serviceAccount = require("E:\School\Android Sever\Lab1\first-project-login-user-list-firebase-adminsdk-qzcx5-0ff05d71c2.json");
 
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://first-project-login-user-list-default-rtdb.firebaseio.com"
});

app.use(express.json());
app.use(express.static(''));

const database = admin.database();
app.get('/', (req, res) => {
    res.send('SignUp');
});

app.post('/save', (req, res) => {
    database.ref('/user/' + req.body.userName).set({
        userPassword: req.body.userPassword,
        userFirstName: req.body.userFirstName,
        userAvatar: req.body.userAvatar,
        userBirthday : req.body.userBirthday,
        userGender: req.body.userGender,
        userDescription: req.body.userDescription,
        userSexual: req.body.userSexual,
    })
})
app.listen(port,() => {
    console.log('App is listening to port ' + {port});
})