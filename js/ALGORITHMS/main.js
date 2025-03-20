function binarySearch(arr,target){
    let min = 0 ,max = arr.length-1;
    console.log(max)

    while(max>=min){
        let guess = Math.floor((min+max)/2);
        if(arr[guess]===target){
            return guess;
        }
        if(arr[guess]<target){
            min = guess+1;
        }else{
            max = guess -1;
        }


    }
    return -1;
}
let arr=[1,3,5,6,7,81,11];


function linearSearchForOrderedArray(arr,searchValue){
    for(const [index,element] of arr.entries()){
        if(element ===searchValue){
            return index;
        }else if(element>searchValue){
            break;
        }
    }
    return null;
}
console.log(linearSearchForOrderedArray(arr,4))

//BUBBLE SORT

function bubbleSort(arr){
    let unsortedTillIndex = arr.length-1;
    let sorted = false;

    while(!sorted){
        sorted = true;
        for(let i  = 0 ;i<unsortedTillIndex;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                sorted= false;
            }
        }
        --unsortedTillIndex;
    }
    return arr;

}