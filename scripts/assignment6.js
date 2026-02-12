
let counter = 0;

function tickUp() {
    counter++;
    document.getElementById("counter").innerText = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").innerText = counter;
}  

function runForLoop() {
    let output = "";
    for (let i = 0; i < counter+1; i++) {
        output += i + " ";
    }
    document.getElementById("forLoopResult").innerText = output;
}

function showOddNumbers() {
    let output = "";
    for (let i = 1; i < counter+1; i+=2) {
        output += i + " ";
    }
    document.getElementById("oddNumberResult").innerText = output;
}

function addMultiplesToArray() {
    let holderNums = [];
    let completeNums = [];
    let localCount = 0;

    if (counter < 5) {
        console.log(holderNums);
        return;
    }

    for (let i = 0; i < counter+1; i++) {
        if (i % 5 == 0) {
            holderNums.push(i);
            localCount++;
        }
    }

    for (let i = holderNums.length-1; i >= 0; i--) {
        completeNums.push(holderNums[i]);
    }

    console.log(completeNums);
}

function printCarObject() {
    
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value,
    }

    console.log(car);
}

function loadCar(num) {

    if (num == 1) {
        console.log(carObject1);
        return;
    }
    if (num == 2) {
        console.log(carObject2);
        return;
    }
    if (num == 3) {
        console.log(carObject3);
        return;
    }
}

function changeColor(num) {
    if(num == 1) {
        document.getElementById("styleParagraph").style.color = "red";
    }
    if(num == 2) {
        document.getElementById("styleParagraph").style.color = "green";
    }
    if(num == 3) {
        document.getElementById("styleParagraph").style.color = "blue";
    }
}
