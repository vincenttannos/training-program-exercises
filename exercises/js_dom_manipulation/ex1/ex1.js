console.log("Yay! The javascript is running")

// Cat picture source 
// https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg

document.getElementById("name").innerHTML = 'Vincent';
document.getElementById("bigger").style.color = 'green';
document.getElementById("bigger").style.fontSize = 'x-large';

// select the first img tag
document.querySelector("img").src = 
    "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg";

const hidden = document.querySelectorAll(".square");

// classList accesses the class list of each element
for (const square of hidden) {
    square.classList.remove("hidden");
}