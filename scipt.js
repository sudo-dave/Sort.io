const sizeSlider = document.getElementById("size");
const barsElement = document.getElementById("bars");
const sortBtn = document.getElementById("btn");
const delayTime = 3000;
const cssVaribles = document.documentElement.style;
const manxSize = 50;
const  minSize = 2;

changeNumberOfBars();
sizeSlider.addEventListener("input",changeNumberOfBars);
sortBtn.addEventListener("click", swapBars);
//Evnet listedr for the text box of inptued set data


function changeNumberOfBars(){
    let inputSize = (this.value == null) ? 3 : this.value;

    barsElement.innerHTML ="";

    cssVaribles.setProperty("--numbOfBars", inputSize);


    for(let i = 0; i < inputSize; i++){
        let randNum = Math.floor(Math.random() * (manxSize - minSize) + minSize);
        // let randNum = Math.floor((Math.random() * manxSize) +minSize);

        let barDiv = document.createElement("div");
        
            barDiv.textContent = randNum;
            barDiv.setAttribute("class","bar");
            barDiv.setAttribute("id",i);
            barDiv.style.height = randNum + 20 + "vh";
        
        barsElement.appendChild(barDiv);
        
    }

}


function swapBars(){
    let barID = 0; 
    let barID2 =2;

    let barOne = document.getElementById(barID);
    let barTwo = document.getElementById(barID2);

    let barOneVal = barOne.textContent;
    let barTwoVal = barTwo.textContent;

    let barOneHeight = barOne.style.height;
    let barTwoHeight = barOne.style.height;

    console.log(barOneHeight);
    barOne.setAttribute("class", " bar bar--swap");
    barTwo.setAttribute("class", " bar bar--swap");

    //swap the vaules
    setTimeout(() => {
    barOne.textContent = barTwoVal;
    barTwo.textContent = barOneVal;
    
    barOne.style.height = barTwoHeight;
    barTwo.style.height = barOneHeight;

    barOne.setAttribute("class", "bar");
    barTwo.setAttribute("class", "bar");


    }, delayTime);

}
