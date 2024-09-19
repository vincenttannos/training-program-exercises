// https://github.com/public-apis/public-apis? 
// Alternative APIs

console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("button")

button.addEventListener("click", () => {
    // yoink API advice
    fetch("https://api.adviceslip.com/advice")
        .then(resp => resp.json())
        // console.log() returns undefined, so have to comment this out
        // .then(data => console.log(data))
        .then((data) => {
            main.innerHTML = data.slip.advice;
        });
})
