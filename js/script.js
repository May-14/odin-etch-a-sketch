let gridContainer = document.createElement("div");
gridContainer.classList.add("full-grid-container");
let numberOfSquaresPerSide = 16;
const body = document.querySelector("body")
const button = document.querySelector("button");
button.insertAdjacentElement("beforebegin", gridContainer)

for (let i = 0; i <numberOfSquaresPerSide; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    for (let i = 0; i <numberOfSquaresPerSide; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.setAttribute("style", `width: ${480/numberOfSquaresPerSide}px; height: ${480/numberOfSquaresPerSide}px;`);
        rowContainer.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black"
        })
    }
    gridContainer.appendChild(rowContainer);
}

function makeNewGrid() {
    body.removeChild(gridContainer)
    gridContainer = document.createElement("div");
    gridContainer.classList.add("full-grid-container");
    button.insertAdjacentElement("beforebegin", gridContainer)
    numberOfSquaresPerSide = Number(prompt("Enter number of squares per side of grid."))
    for (let i = 0; i <numberOfSquaresPerSide; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let i = 0; i <numberOfSquaresPerSide; i++) {
            const div = document.createElement("div");
            div.classList.add("grid");
            div.setAttribute("style", `width: ${480/numberOfSquaresPerSide}px; height: ${480/numberOfSquaresPerSide}px;`)
            rowContainer.appendChild(div);
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "black"
            })
        }
        gridContainer.appendChild(rowContainer);
    }
}