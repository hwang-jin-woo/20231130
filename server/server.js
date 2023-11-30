const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

// 라우트 모듈들을 분리하여 가져옵니다.
const testRouter = require('./routes/test');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

// 라우트 모듈들을 사용합니다.
app.use('/api/test', testRouter);
app.use('/api/register', registerRouter); 
app.use('/api/login', loginRouter);

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '내부 서버 오류' });
});

// 데이터베이스 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류: ' + err.message);
  } else {
    console.log('MySQL 데이터베이스에 연결되었습니다.');
  }
});

const PORT = process.env.PORT || 3301;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});
