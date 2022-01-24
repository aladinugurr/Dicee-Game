function Play() {
   
       var randomNumber = Math.floor(Math.random()*6)+1;
var image = "dice" + randomNumber+".png";

var images = "images/" + image ;

var image1 = document.getElementById("img1");

 image1.setAttribute("src",images);


 var randomNumber2 = Math.floor(Math.random()*6)+1;
 var image2src = document.getElementById("img2");
var image2= "dice"+randomNumber2+".png";
 images2="images/"+ image2 ;

 var setImage2= image2src.setAttribute("src",images2);
      
 if(randomNumber>randomNumber2){

    document.getElementById("h1").innerHTML = "🚩 Player1 Won"
   }
   else if (randomNumber2>randomNumber){
      document.getElementById("h1").innerHTML = "Player2 Won 🚩"
   }
   else{
      document.getElementById("h1").innerHTML = "Draw"
   }
}
document.getElementById("play-button").addEventListener('click',Play);

