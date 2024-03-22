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
    numberOfSquaresPerSide = prompt("Enter number of squares per side of grid.")
    if (numberOfSquaresPerSide === "" || numberOfSquaresPerSide === null) {
        numberOfSquaresPerSide = 16;
    }
    numberOfSquaresPerSide = +`${numberOfSquaresPerSide}`;
    while (numberOfSquaresPerSide > 100 || Object.is(numberOfSquaresPerSide, NaN) || typeof numberOfSquaresPerSide !== "number" ||numberOfSquaresPerSide < 1) {
        numberOfSquaresPerSide = prompt("Try again, please enter a number less than 100 and more than 0");
        if (numberOfSquaresPerSide === "" || numberOfSquaresPerSide === null) {
            numberOfSquaresPerSide = 16;
        }
        numberOfSquaresPerSide = +`${numberOfSquaresPerSide}`;
    }
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