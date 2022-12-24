alert("HI THERE, TO UNDERSTAND WHAT THIS IS ALL ABOUT, NAVIGATE TO THE FOOTER TO LEARN MORE.");





var button = document.getElementById('button');
button.addEventListener('click', randomFraction);


function randomFraction(){

   var output = document.getElementById('font');
    output.innerHTML= Math.floor(Math.random() * 100);

 
}

var button = document.getElementById('button1');
button.addEventListener('click', randomFraction1);


function randomFraction1(){

   var output1 = document.getElementById('bossGen');
    output1.innerHTML= Math.floor(Math.random() * 100);

 
}


  








// var navLinks = document.getElementById("navLinks");
//       function showMenu() {
//         navLinks.style.right = "0";
//       }
//       function hideMenu() {
//         navLinks.style.right = "-200px";
//       }