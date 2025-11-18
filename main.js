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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            bars[j].style.background = "yellow";
            bars[j + 1].style.background = "yellow";

            await sleep(80);

            if (array[j] > array[j + 1]) {
                bars[j].style.background = "red";
                bars[j + 1].style.background = "red";

                await sleep(80);

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = array[j] + "px";
                bars[j + 1].style.height = array[j + 1] + "px";

                await sleep(80);
            }

            bars[j].style.background = "#4a90e2";
            bars[j + 1].style.background = "#4a90e2";
        }

        bars[array.length - 1 - i].style.background = "green";
    }

    bars[0].style.background = "green";
}

document.getElementById("startBtn").addEventListener("click", () => {
    const algo = document.getElementById("algoritmSelect").value;

    if (algo === "bubble") {
        bubbleSort();
    }
}); 


document.getElementById("generateBtn").addEventListener("click", () => {
    generateArray();
});
