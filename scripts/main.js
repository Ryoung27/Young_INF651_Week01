//Set a constant value to the h1 of the document using a query selector.
const myHeading = document.querySelector('h1'); 
//Set the text content of the selected element to 'Hello world!'
myHeading.textContent = 'Hello world!';

let iceCream = 'Chocolate'


function changeHeading(){
    //Set a constant value to the h1 of the document using a query selector.
    const myHeading = document.querySelector('h1'); 
    //Set the text content of the selected element to 'Hello world!'
    myHeading.textContent = 'Hello world!';
}

function iceCreamConditional(iceCream){
    if (iceCream.toLowerCase() === 'chocolate'){
        alert('Yay, I love chocolate ice cream!');
    } else{
        alert('Aww, but chocolate is my favorite...');
    }
}

//Change the heading to hello world.
changeHeading()
iceCreamConditional(iceCream)

let myVariable = 'Test';