const User = require('../models/user');
const connection = require('./mysqlconnect');

// const registerUser = (req, res) => {
//   try {
//     connection.query(
//       `select * from mydb1.USER where USER_ID='${req.body.id}';`,
//       (err, data) => {
//         if (err) throw err;
//         if (data.length !== 0)
//           return res.status(400).json('이미 가입된 회원입니다.');

//         connection.query(
//           `insert into mydb1.USER (USER_ID,PASSWORD) values('${req.body.id}','${req.body.password}')`,
//           (err, data) => {
//             if (err) throw err;
//             res.status(200).json('회원가입 성공');
//           }
//         );
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     res.status(500).json('회원가입 실패.');
//   }
// };

const register = async (req, res) => {
  try {
    const { userID, userPW } = req.body;
    const findUser = await User.findOne({ userID: req.body.userID });
    if (!findUser) {
      await User.create({
        userID,
        userPW,
      });
      console.log(res);
      return res.status(200).json('회원 가입 성공');
    } else {
      console.log(res);
      return res.status(200).json('이미 존재하는 회원입니다.');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('알수 없는 오류');
  }
};

module.exports = { register };
