function greet(user) {
  if (user) {
    return 'Hello, ' + user + '!';
  } else {
    return 'Hello, Guest!';
  }
}

var users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

users.forEach(function (user) {
  console.log(greet(user.name));
  console.log('Age: ', user.age);
});
