## Assignment 3
Click [here](https://henrybreukelman.github.io/Assignment-3/) to test the application
This is a application that will change the size of a box and the background color accordingly

# Steps
Html
1) Create your file and fill in basic information
2) Link to your CSS and JavaScript
3) Add two buttons, one for bigger, and the other for smaller
4) Add a <div> for your box
```HTML
   <main class="center">
        <section class="buttons flex">
            <div class="button bigger center">+</div>
            <div class="button smaller center">-</div>
        </section>
        <div class="box"></div>
    </main>
```

CSS
1) Create your file and fill in basic information
2) Add your general styles
3) Style your buttons
```CSS
.button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin: 30px 15px 20px 15px;
    font-size: 25px;
    font-weight: 800;
    transition: 0.25s all ease-in-out;
}
```
4) Style your box
```CSS
.box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(255 255 255 / 0.05);
    background-color: rgb(100, 100, 100);
    transition: 0.15s all ease-in-out;
}
```

JavaScript
1) Create your file and fill in basic information
2) Links your HTML elements to the JS
3) Add a 'let' for the 'boxSize'
```JavaScript
const bigger = document.querySelector('.bigger');
const smaller = document.querySelector('.smaller');
const box = document.querySelector('.box');
let boxSize = 100;
```
4) Add a funtion that will set the size of the box and background color
  a) Set width and hight with box.style and the 'boxSize' +'px'
  b) Set the background color with the 'boxSize'
```JavaScript
function setBox() {
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = `rgb(${boxSize}, ${boxSize}, ${boxSize})`;
}
```
5) Add a bigger function
  a) Use an if to make sure the box is not to big
  b) Increase the 'boxSize'
  c) Call the fuction to set the size of the box
```JavaScript
function makeBigger() {
    if (boxSize < 255) {
        boxSize = boxSize + 5;
        setBox();
    }
}
```
6) Do the same for smaller
  a) Check if the box is not to small
  b) Decrease the 'boxSize'
  c) Call the fuction to set the size of the box
```JavaScript
function makeSmaller() {
    if (boxSize > 1) {
        boxSize = boxSize - 5;
        setBox();
    }
}
```
7) Add event listeners for when you click on the buttons
```JavaScript
bigger.addEventListener('click', makeBigger)
smaller.addEventListener('click', makeSmaller)
```


