module.exports = () => {
  const users = [];
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    users.push({ id: i, name: `user${i}` });
  }

  return users;
};
