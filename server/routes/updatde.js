// 서버 측 API (예: routes/updateUser.js)

const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'member',
});

// 회원 정보 수정 API
router.put('/', (req, res) => {
  const userId = req.params.userId;
  const {
    user_pw,
    user_name,
    user_gender,
    user_phone_num,
    user_birth,
    user_location,
  } = req.body;

  const query = `
    UPDATE users
    SET
      회원비밀번호 = ?,
      회원성명 = ?,
      회원성별 = ?,
      회원전화번호 = ?,
      회원생년월일 = ?,
      회원지역 = ?
    WHERE 회원아이디 = ?
  `;

  db.query(
    query,
    [
      user_pw,
      user_name,
      user_gender,
      user_phone_num,
      user_birth,
      user_location,
      userId,
    ],
    (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('서버 오류');
      } else {
        res.status(200).json({ message: '회원정보 수정 성공' });
      }
    }
  );
});

module.exports = router;
