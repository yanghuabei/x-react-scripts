const users = require('./data/user')();

exports.data = async () => ({
  users: users,
  userList: {
    success: true,
    data: users,
  },
});

exports.routes = {
  '/mock/api/*': '/$1',
  '/user/list': '/userList', // non-restful api can use custom route to rescue
};
