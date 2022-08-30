//Get the image from the img tag.
const myImage = document.querySelector('img');

//When the image is clicked.
myImage.onclick = () => {
  //Get the src of the image, and flip it if it isn't the firefox-icon.
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}

//Use a querySelector on the document to get the button/heading.
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//Ask the user to enter their name.
function setUserName() {
    const myName = prompt('Please enter your name.');
    //If the value is null call the functon again.
    if (!myName) {
      setUserName();
    //If a value was entered for myName save it to local storage, and display.
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  //When the "change user" button is clicked call setUserName function.
  myButton.onclick = () => {
    setUserName();
  }