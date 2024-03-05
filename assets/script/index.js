'use strict';

const bigger = document.querySelector('.bigger');
const smaller = document.querySelector('.smaller');
const box = document.querySelector('.box');
let boxSize = 100;

function setBox() {
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = `rgb(${boxSize}, ${boxSize}, ${boxSize})`;
}

function makeBigger() {
    if (boxSize < 255) {
        boxSize = boxSize + 5;
        setBox();
    }
}

function makeSmaller() {
    if (boxSize > 1) {
        boxSize = boxSize - 5;
        setBox();
    }
}

bigger.addEventListener('click', makeBigger)
smaller.addEventListener('click', makeSmaller)