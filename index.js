var express = require('express');
var app = express();
var expressHbs = require('express-handlebars');

app.use('/assets', express.static(__dirname + '/assets'));
app.engine('handlebars', expressHbs({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
    // app.get('/', function(request, respone) {
    //     var name = 'Thang';
    //     var arr = ['Thang', 'Dep', 'Trai', 'Vo', 'Dich']
    //     respone.render('home', { title: name, date: '30/03/2021', array: arr });
    // });
app.get('/', function(request, respone) {
    respone.render('index');
});
app.get('/login', function(request, respone) {
    respone.render('login');
});
app.get('/register', function(request, respone) {
    respone.render('register');
});
app.get('/home', function(request, respone) {
    respone.render('home');
});

// app.post('/login',function(request,response){


// });
app.listen(process.env.PORT || '9119')