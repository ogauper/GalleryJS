

var current = -1;
var chico = ["Creek", "Library","Computer Lab", "Cafeteria", "Bidwell Park"];

function shuffleGallery()
{
var num = Math.floor(Math.random() * (chico.length ));
while (num == current ){
  num = Math.floor(Math.random() * (chico.length ));
}
console.log(chico[num]);
current = num;
}
