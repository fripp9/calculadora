const allSmallNumBtns = document.querySelectorAll(".btnSmallNum");
const allSmallOperationBtns = document.querySelectorAll(".btnSmallOperation");
const btnResultado = document.querySelector("#btnResultado");
const display = document.querySelector("#display");
const btnDelete = document.querySelector("#btnDelete");
const btnSmallSign = document.querySelector("#btnSmallSign");
const btnBackspace = document.querySelector("#btnBackspace");

allSmallNumBtns.forEach(btn => btn.addEventListener("click", handleClickNum));
allSmallOperationBtns.forEach(btn => btn.addEventListener("click", handleClickOperation));
btnResultado.addEventListener("click", handleClickResultado);
btnDelete.addEventListener("click", handleClickDelete);
btnSmallSign.addEventListener("click", handleSign);
btnBackspace.addEventListener("click", handleDel);

let a = '';
let b = '';
let c = '';
let resultClicked = false;

function add(a, b) {
    aA = Number(a);
    bB = Number(b);
    return aA+bB;
}

function substract(a, b) {
    aA = Number(a);
    bB = Number(b);
    return aA-bB;
}

function multiply (a, b) {
    aA = Number(a);
    bB = Number(b);
    return aA*bB;
}

function divide (a, b) {
    aA = Number(a);
    bB = Number(b);
    if (bB === 0) {
        return "You tried."
    }   else {
        return aA/bB;
    }
}

function operate (a, b, c) {
    if (c === "+") {
        return add(a, b);
    }   else if (c === "-") {
        return substract(a, b);
    }   else if (c === "*") {
        return multiply (a, b);
    }   else if (c === "/") {
        return divide (a, b);
    }
}


function handleClickNum(event) {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "x" || display.textContent === "/") {
        display.textContent = "";
    }
    if (resultClicked === true) {
        display.textContent = "";
        resultClicked = false;
    }
    if (event.target.id === "num1") {
        display.append("1");
    }   else if (event.target.id === "num2") {
        display.append("2");
    }   else if (event.target.id === "num3") {
        display.append("3");
    }   else if (event.target.id === "num4") {
        display.append("4");
    }   else if (event.target.id === "num5") {
        display.append("5");
    }   else if (event.target.id === "num6") {
        display.append("6");
    }   else if (event.target.id === "num7") {
        display.append("7");
    }   else if (event.target.id === "num8") {
        display.append("8");
    }   else if (event.target.id === "num9") {
        display.append("9");
    }   else if (event.target.id === "num0") {
        display.append("0");
    }   else if (event.target.id === "numPoint") {
        if (display.textContent.includes(".")) {
            return;
        }   else {
            display.append(".");
        }
    }
}   

function handleClickOperation(event) {
    if (!isNaN(display.textContent)) {
        a = display.textContent
    }
    if (event.target.id === "btnPlus") {
        display.textContent = "+";
        c = "+";
    }   else if (event.target.id === "btnMinus") {
        display.textContent = "-";
        c = "-";
    }   else if (event.target.id === "btnTimes") {
        display.textContent = "x";
        c = "*";
    }   else if (event.target.id === "btnDivision") {
        display.textContent = "/";
        c = "/";
    }
}

function handleClickResultado() {
    if (a === 0 || b === 0) {
        return;
    }   else {
        if (resultClicked === true) {
            display.textContent = operate (a, b, c);
            a = display.textContent;
        }   else {
            b = display.textContent;
            display.textContent = operate (a, b, c);
            a = display.textContent;
            resultClicked = true;
        }
    }
}

function handleClickDelete() {
    display.textContent = '';
    a = '';
    b = '';
    c = '';
    resultClicked = false;
}

function handleSign() {
    if (isNaN(display.textContent)) {
        return;
    }   else {
        display.textContent = Number(display.textContent)*(-1);
    }
}

function handleDel() {
    if (isNaN(display.textContent)) {
        return;
    }   else {
       let str = display.textContent;
       display.textContent = str.slice(0, -1);
    }
}



