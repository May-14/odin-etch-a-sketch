let gridContainer = document.createElement("div");
const tools = document.getElementsByName("tool");
gridContainer.classList.add("full-grid-container");
let numberOfSquaresPerSide = 16;
let passedOnce = false;
let colorChosen = document.querySelector(".color")
let opacitySetting = document.querySelector(".opacity")
const body = document.querySelector("body")
const buttonDiv = document.querySelector(".buttons");
buttonDiv.insertAdjacentElement("beforebegin", gridContainer)
let toolChosen = "draw";
colorChosen.defaultValue = "#FFFFFF"




function makeNewGrid() {
    body.removeChild(gridContainer)
    gridContainer = document.createElement("div");
    gridContainer.classList.add("full-grid-container");
    buttonDiv.insertAdjacentElement("beforebegin", gridContainer)
    if (passedOnce === true) {
        numberOfSquaresPerSide = prompt("Enter number of squares per side of grid.");
    }
    passedOnce = true;
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
            div.style.opacity = 1;
            div.addEventListener("mouseenter", () => {
                if (toolChosen === "draw") {
                    div.style.opacity = div.style.opacity - opacitySetting.value;
                    if (div.style.opacity < 0) {
                        div.style.opacity = 0;
                    }
                } else if (toolChosen === "erase") {
                    div.style.opacity = Number(div.style.opacity) + Number(opacitySetting.value)
                    if (div.style.opacity > 1) {
                        div.style.opacity = 1;
                    }
                } 
            })
        }
        gridContainer.appendChild(rowContainer);
    }
}

makeNewGrid()

colorChosen.addEventListener("change", () => {
    const allGrids = document.querySelectorAll(".grid");
    allGrids.forEach(grid => {
        if (grid.style.backgroundColor !== "black") {
            grid.style.backgroundColor = colorChosen.value
        }
    })
})

tools.forEach(tool => {
    tool.addEventListener("change", () => {
        toolChosen = tool.value;
    })
})

window.addEventListener("keypress", e => {
    console.log(e.key)
    if (e.key === "e") {
        tools.forEach(tool => {
            if (tool.value !== "erase") {
                tool.checked = false;
            } else {
                tool.checked = true;;
            }
        })
        toolChosen = "erase";
    } 
    if (e.key === "d") {
        tools.forEach(tool => {
            if (tool.value !== "draw") {
                tool.checked = false;
            } else {
                tool.checked = true;;
            }
        })
        toolChosen = "draw";
    } 
    if (e.key === "n") {
        tools.forEach(tool => {
            if (tool.value !== "none") {
                tool.checked = false;
            } else {
                tool.checked = true;;
            }
        })
        toolChosen = "none";
    } 
})