function printInTwoSeconds(message) {
  setTimeout(function() {
    console.log(message)
  }, 2000);
};

printInTwoSeconds('Hello Async');

console.log('2');
