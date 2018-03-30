const user = require('./data/user');

exports.data = async () => ({
  users: user(),
});

exports.routes = {
  '/mock/api/*': '/$1',
};
