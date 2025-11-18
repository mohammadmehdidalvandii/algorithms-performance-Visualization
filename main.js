const barsContainer = document.getElementById("barsContainer");
let array = [];

function generateArray(size = 30) {
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 300) + 10);
    }
    renderArray();
}

function renderArray() {
    barsContainer.innerHTML = "";
    array.forEach(value => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = value + "px";
        barsContainer.appendChild(bar);
    });
}

document.getElementById("generateBtn").addEventListener("click", () => {
    generateArray();
});
