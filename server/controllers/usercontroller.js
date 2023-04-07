const connection = require('./mysqlconnect');

const registerUser = (req, res) => {
  try {
    connection.query(
      `select * from mydb1.USER where USER_ID='${req.body.id}';`,
      (err, data) => {
        if (err) throw err;
        if (data.length !== 0)
          return res.status(400).json('이미 가입된 회원입니다.');

        connection.query(
          `insert into mydb1.USER (USER_ID,PASSWORD) values('${req.body.id}','${req.body.password}')`,
          (err, data) => {
            if (err) throw err;
            res.status(200).json('회원가입 성공');
          }
        );
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json('회원가입 실패.');
  }
};

module.exports = { registerUser };
