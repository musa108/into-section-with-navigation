const features = document.querySelector('.Features');
const arrowDown = document.querySelector('#arrowdown');
const arrowDownTwo = document.querySelector('#arrowdown-two');
const dropdown = document.querySelector('.dropdown-one');
const dropdownTwo = document.querySelector('.dropdown-two');
const arrowUp  = document.querySelector('.arrow-up');
const arrowUptwo  = document.querySelector('.arrow-up-two');
const arrowUpthree  = document.querySelector('.arrow-up-three');
const arrowUpfour = document.querySelector('.arrow-up-four');
const arrowDownThree = document.querySelector('#arrowdown-three');
const arrowDownfour = document.querySelector('#arrowdown-four');
const dropdownThree = document.querySelector('.dropdown-three');
const dropdownfour = document.querySelector('.dropdown-four');
const menu = document.querySelector('#menu');
const colapse = document.querySelector('.colapse');
const cancel = document.querySelector('#cancel');


menu.addEventListener('click', () =>{
    if (menu.style.display = "block") {
        menu.style.display = "none"; 
        colapse.style.display= "block";
        colapse.style.width = "200vw"
    }
});
cancel.addEventListener('click', () =>{
    if (menu.style.display = "none") {
        menu.style.display = "block"; 
        colapse.style.display= "none";
    }
});



arrowDown.addEventListener('click',() =>{
    if (arrowDown.style.display = "block") {
        arrowDown.style.display ="none"
        dropdown.style.display = "block"
    } 
});
arrowUp.addEventListener('click',() =>{
    if (arrowDown.style.display = "none") {
        arrowDown.style.display ="block"
        dropdown.style.display = "none"
    } 
});
arrowDownTwo.addEventListener('click',() =>{
    if (arrowDownTwo.style.display = "block") {
        arrowDownTwo.style.display ="none"
        dropdownTwo.style.display = "block"
    } 
});
arrowUptwo.addEventListener('click',() =>{
    if (arrowDownTwo.style.display = "none") {
        arrowDownTwo.style.display ="block"
        dropdownTwo.style.display = "none"
    } 
});
arrowDownThree.addEventListener('click',() =>{
    if (arrowDownThree.style.display = "block") {
        arrowDownThree.style.display ="none"
        dropdownThree.style.display = "block"
    } 
});
arrowUpthree.addEventListener('click',() =>{
    if (arrowDownThree.style.display = "none") {
        arrowDownThree.style.display ="block"
        dropdownThree.style.display = "none"
    } 
});
arrowDownfour.addEventListener('click',() =>{
    if (arrowDownfour.style.display = "block") {
        arrowDownfour.style.display ="none"
        dropdownfour.style.display = "block"
    } 
});
arrowUpfour.addEventListener('click',() =>{
    if (arrowDownfour.style.display = "none") {
        arrowDownfour.style.display ="block"
        dropdownfour.style.display = "none"
    } 
});




