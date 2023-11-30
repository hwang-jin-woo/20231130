// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3301;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL 데이터베이스에 연결되었습니다.');
  }
});

// 간단한 메모리 저장소
const posts = [];

// 게시글 목록 조회
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// 게시글 작성
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;

  // 예제: 단순히 메모리에 저장
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
