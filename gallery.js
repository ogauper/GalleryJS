

var current = -1;
var chico = [

 {description: "Creek", picture:"https://livingnewdeal.org/wp-content/uploads/2009/02/bidwell_bowl_005.jpg", from:"https://livingnewdeal.org"},
 {description: "Library", picture:"http://www.csuchico.edu/maps/campus/images/meriam.jpg", from:"http://www.csuchico.edu"},
 {description: "Computer Lab", picture:"http://www.csuchico.edu/maps/images/buildings-photos/buildings-oconnell.jpg", from:"http://www.csuchico.edu"},
 {description: "Cafeteria", picture:"https://www.csuchico.edu/maps/images/buildings-photos/building-bmu.jpg", from:"http://www.csuchico.edu"},
 {description: "Bidwell_park", picture:"http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg", from:"http://bidwellpark.org/"}
]

function shuffleGallery()
{
var num = Math.floor(Math.random() * (chico.length ));
while (num == current ){
  num = Math.floor(Math.random() * (chico.length ));
}


document.getElementById("caption").innerHtml = chico[num].description;
document.getElementById("source").innerHtml = chico[num].from;
document.getElementById("picture").src = chico[num].picture;


current = num;
}

