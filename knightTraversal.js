
//1 2 3
//4 5 6
//7 8 9
//  0

let knightMap = {
    1 : [8,6],
    2 : [7,9],
    3 : [4,8],
    4 : [3,9,0],
    5 : [],
    6 : [1,7,0],
    7 : [2,6],
    8 : [1,3],
    9 : [4,2],
    0 : [4,6]
} 

const knightTraversal = (startingPosition, numberOfMoves) => {
    //base case
    let count = 0;
    if(numberOfMoves === 0){
     count = 1;
    } else {
        for(let i = 0; i < knightMap[startingPosition].length; i++){
            numberOfMoves = numberOfMoves - 1
            return knightTraversal(knightMap[startingPosition][i], numberOfMoves) + knightTraversal(knightMap[startingPosition][i+1], numberOfMoves) + 1
            
        }
    }
    return count;
}

console.log(knightTraversal(3,4))