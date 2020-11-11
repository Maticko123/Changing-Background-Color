const Btn = document.getElementById("btn");
const colorEl = document.getElementById("color");

function changeColor() {
    Btn.addEventListener("click", () => {
        let color = colorEl.value;
        document.body.style.backgroundColor = color;
    });
}
changeColor();


