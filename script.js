/*
        Random image slideshow- By Tyler Clarke (tyler@ihatecoffee.com)
        For this script and more, visit http://www.javascriptkit.com
        */

let delay = 5000; //set delay in miliseconds
let curindex = 0;

let randomimages = ringoImages;

let preload = new Array();

for (n = 0; n < randomimages.length; n++) {
  preload[n] = new Image();
  preload[n].src = "images/" + randomimages[n];
}
let importImages =
  // '<img name="defaultimage" src="' +
  Math.floor(Math.random() * randomimages.length); // +
// '">';
document.getElementById("imagesHere").src = randomimages[importImages];
//    document.write('<img name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

function rotateimage() {
  if (
    curindex == (tempindex = Math.floor(Math.random() * randomimages.length))
  ) {
    curindex = curindex == 0 ? 1 : curindex - 1;
  } else curindex = tempindex;

  document.images.defaultimage.src = "images/" + randomimages[curindex];
}

//setInterval("rotateimage()", delay);

//  <p align="center">This free script provided by<br />
//         <a href="http://javascriptkit.com">JavaScript
//         Kit</a></p>
