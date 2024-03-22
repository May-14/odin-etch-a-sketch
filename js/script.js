const gridContainer = document.querySelector("div");

for (let i = 0; i <16; i++) {
    const container = document.createElement("div");
    container.classList.add("row-container");
    for (let i = 0; i <16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black"
        })
    }
    gridContainer.appendChild(container);
}

function makeNewGrid() {
    prompt("Enter number of squares per side of grid.")
}