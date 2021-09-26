export class Bars{
    constructor(inputSize){
        this.inputSize = (inputSize) ? inputSize : 3;
        this.barsElement = document.getElementById("bars");
        this.cssVaribles = document.documentElement.style;
        this.swapSpeed = 3000;
        this.manxSize = 50;
        this.minSize = 2;
        //use object insteafd of map, when you know your keys
        this.barVaules = {};
    }
    changeNumberOfBars(){
        this.barsElement.innerHTML = "";
        this.cssVaribles.setProperty("--numbOfBars", this.inputSize);
    

        for(let i = 0; i < this.inputSize; i++){
        let randNum = Math.floor(Math.random() * (this.manxSize - this.minSize) + this.minSize);

        let barDiv = document.createElement("div");
        
        barDiv.textContent = randNum;
        barDiv.setAttribute("class","bar");
        barDiv.setAttribute("id",i);
        barDiv.style.height = randNum + 20 + "vh";
        
        this.barsElement.appendChild(barDiv);
        this.barVaules[i] = randNum;
        }


    }
    swapBars(barID, barID2){

    let barOne = document.getElementById(barID);
    let barTwo = document.getElementById(barID2);

    let barOneVal = barOne.textContent;
    let barTwoVal = barTwo.textContent;

    let barOneHeight = barOne.style.height;
    let barTwoHeight = barTwo.style.height;

    barOne.setAttribute("class", " bar bar--swap");
    barTwo.setAttribute("class", " bar bar--swap");

    setTimeout(() => {
    barOne.textContent = barTwoVal;
    barTwo.textContent = barOneVal;
    
    barOne.style.height = barTwoHeight;
    barTwo.style.height = barOneHeight;

    barOne.setAttribute("class", "bar");
    barTwo.setAttribute("class", "bar");

    }, this.swapSpeed);
    }
}

export class Algo{
    constructor(bars){
        this.bars = bars;
    }
    selectionSort(){
        let n = this.bars.inputSize;
        let arr 
        var i, j, min_idx;
 
        // One by one move boundary of unsorted subarray
        for (i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            min_idx = i;
            for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
     
            // Swap the found minimum element with the first element
            swap(arr,min_idx, i);
        }
    }
}