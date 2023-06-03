const mongoose = require('mongoose');
const { MONGO_DB_URI } = process.env;

const connection = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, {
      dbName: 'ReduxMBTI',
      useNewUrlParser: true,
    });
    console.log('mongoose connection success');
    mongoose.connection.on('error', (err) => {
      console.error;
      '연결 오류', err;
    });
    mongoose.connection.on('disconnected', () => {
      console.error('몽고 디비 연결 끊김');
      mongoose.connect();
    });
  } catch (err) {
    console.log(err);
  }
};

connection();
module.exports = connection;
