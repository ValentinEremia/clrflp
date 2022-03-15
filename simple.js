const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    // ia la intamplare intre 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber (){
// return Math.random();     - asta da valori intre 0.ceva - pana aproape de 1 ,dar niciodata nu ajunge la exact 1 !!! De aceea noi trebuie sa rotunjim cu "Math.floor" si apoi multiplicam rezultatul cu numarul de culor pe care il avem noi (sau cu numarul de elemente pe care il are "array-ul nostru") .
return Math.floor(Math.random()*colors.length);
}