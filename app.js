//1a
const button1 = document.getElementById(`one`);

//1b
button1.onclick = function (){
    alert(`You clicked the first button! Congrats!`);
};

//2a
const h3 = document.querySelector(`h3`);

//2b
h3.addEventListener (`mouseover`, function() {
    alert(`You hovered over the h3 element! Congrats!`)
},{once: true});

//3a
const form = document.querySelector(`form`);

//3b
form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value;
    alert(`${entry}`);
});

//BONUS
//4a
const darkMode = document.getElementById(`dm`);

//4b
const body = document.querySelector(`body`);

darkMode.addEventListener(`click`, () => {
    body.classList.toggle(`dark-mode`);
});

//5a
const times = document.getElementById(`times`);

//5b
let x = 0
times.addEventListener(`click`, () => {
    x++;
    if (x <= 2){
        alert(`You clicked the last button! Congrats!`);
    } else if (x === 3){
        alert(`OH NO! This button is NOT going to work anymore!`);
    } else {
        times.disabled = true;
    }
});