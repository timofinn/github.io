var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fields.jpg') {
      myImage.setAttribute ('src','images/fields.jpg');
    } else {
      myImage.setAttribute ('src','images/Red_Barn.jpg');
    }
}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//gather users name
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  //checks for previously saved name, runs function 
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }