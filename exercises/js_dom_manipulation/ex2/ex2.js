console.log("Exercise 2")

const main = document.querySelector("#display-box")

document.querySelector("#button1").addEventListener("mouseout", button1);

function button1() {
    main.innerHTML = document.getElementById("text1").innerHTML;
}

document.querySelector("#button2").addEventListener("mouseout", button2);

function button2() {
    main.innerHTML = document.getElementById("text2").innerHTML;
}

document.querySelector("#button3").addEventListener("mouseout", button3);

function button3() {
    main.innerHTML = document.getElementById("text3").innerHTML;
}