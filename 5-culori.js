const culori = ["red", "royalblue", "orange", "#66d39c", "orchid"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const numarIntamplare = iaNumarLaIntamplare();
    document.body.style.backgroundColor = culori[numarIntamplare];
    color.textContent = culori[numarIntamplare];
})

function iaNumarLaIntamplare(){
    return Math.floor(Math.random() * culori.length);
}