var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/open-picture.png') {
      myImage.setAttribute ('src','images/in-session.png');
    } else {
      myImage.setAttribute ('src','images/open-picture.png');
    }
}*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ping-Pong is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ping-Pong is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

setInterval("updateImage()", 10000);

function updateImage() {
	var myImage = document.querySelector('img');
	var myRequest = new Request('/images/cam.jpg');
	fetch(myRequest)
	.then(function(response) { return response.blob(); })
	.then(function(myBlob) {
		var objectURL = URL.createObjectURL(myBlob);
		myImage.src = objectURL;
	});
}
