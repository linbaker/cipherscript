var sentence = prompt("Enter a sentence");
console.log(sentence);

var capital = function (string) {
  console.log(string.charAt(0).toUpperCase() + string.slice(-1).toUpperCase());
};

capital(sentence);
