const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express(); //建立一個Express伺服器
app.use(cors());//可跨網域
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//連結Mariasql
var Client = require('mariasql');

//相關設定
var c = new Client({
  host: '127.0.0.1',
  //UserName
  user: 'root',
  //UserPassword
  password: 'password',
  //資料庫
  db: 'demo'
});

/* 
app.get('/', function (req, res) {
  res.send('Send root!')
});

app.get('/about', function (req, res) {
  res.send('about')
});
*/

app.get('/GetStudent', function (req, res) {
  //结合使用SQL语句
  c.query(`SELECT * FROM Student where student_age > ${req.query.minAge} and student_age < ${req.query.maxAge}`
  , function (err, rows) {
    if (err){
      throw err;
    }else{
   //res.send(rows)
    res.json(rows);
    }
  });
  //关闭数据库
  c.end();
});


app.post('/PostStudent', function (req, res) {
  //结合使用SQL语句
  c.query(`SELECT * FROM Student where student_age > ${req.body.minAge} and student_age < ${req.body.maxAge}`
  , function (err, rows) {
    if (err){
      throw err;
    }else{
   //res.send(rows)
    res.json(rows);
    }
  });
  //关闭数据库
  c.end();
});


app.get('/sale', function (req, res) {
  //结合使用SQL语句
  c.query('SELECT * FROM Student where student_age < 15', function (err, rows) {
    if (err){
      throw err;
    }else{
   // res.send(rows)
    res.json(rows);
    }

  });
  //关闭数据库
  c.end();
});


app.listen(3000); //告訴server聽取3000這個Port